// API Configuration
const API_URL = 'http://localhost:3000';

// DOM Elements
const articleContent = document.getElementById('article-content');

// Get article ID from URL
function getArticleIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Format date to readable format
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Create article HTML
function createArticleHTML(post) {
    return `
        <div class="article-header">
            <h1>${post.title}</h1>
            <div class="article-meta">
                <span><i class="fas fa-user"></i> ${post.author}</span>
                <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                ${post.category ? `<span><i class="fas fa-tag"></i> ${post.category}</span>` : ''}
            </div>
        </div>
        
        ${post.image ? `
            <div class="article-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
        ` : ''}
        
        <div class="article-body">
            ${post.content.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
        </div>
    `;
}

// Fetch article from JSON Server
async function fetchArticle(id) {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Article not found');
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching article:', error);
        return null;
    }
}

// Display article
async function displayArticle() {
    const articleId = getArticleIdFromURL();
    
    if (!articleId) {
        articleContent.innerHTML = '<p class="error">No article specified. Please go back to the home page and select an article.</p>';
        return;
    }
    
    const article = await fetchArticle(articleId);
    
    if (article) {
        // Update page title
        document.title = `${article.title} - Simple Blog`;
        
        // Display article
        articleContent.innerHTML = createArticleHTML(article);
    } else {
        articleContent.innerHTML = '<p class="error">Article not found. It may have been deleted or the ID is incorrect.</p>';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', displayArticle);