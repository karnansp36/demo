// API Configuration
const API_URL = 'http://localhost:3000';
let currentPage = 1;
const postsPerPage = 6;

// DOM Elements
const postsContainer = document.getElementById('posts-container');
const featuredArticleContainer = document.getElementById('featured-article');
const loadMoreBtn = document.getElementById('load-more');

// Format date to readable format
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Create post card HTML
function createPostCard(post) {
    return `
        <div class="post-card" data-id="${post.id}">
            <div class="post-image">
                <img src="${post.image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'}" alt="${post.title}">
            </div>
            <div class="post-content">
                <h3>${post.title}</h3>
                <div class="post-meta">
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                    ${post.category ? `<span><i class="fas fa-tag"></i> ${post.category}</span>` : ''}
                </div>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="article.html?id=${post.id}" class="btn">Read More</a>
            </div>
        </div>
    `;
}

// Create featured article HTML
function createFeaturedArticle(post) {
    return `
        <div class="featured-article" data-id="${post.id}">
            <div class="featured-image">
                <img src="${post.image || 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'}" alt="${post.title}">
            </div>
            <div class="featured-text">
                <h3>${post.title}</h3>
                <div class="featured-meta">
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                    ${post.category ? `<span><i class="fas fa-tag"></i> ${post.category}</span>` : ''}
                </div>
                <p class="featured-excerpt">${post.excerpt}</p>
                <a href="article.html?id=${post.id}" class="btn">Read Full Article</a>
            </div>
        </div>
    `;
}

// Fetch posts from JSON Server
async function fetchPosts(page = 1) {
    try {
        // Calculate start and end indices for pagination
        const start = (page - 1) * postsPerPage;
        
        // Fetch posts with pagination
        const response = await fetch(`${API_URL}/posts?_sort=date&_order=desc&_start=${start}&_end=${start + postsPerPage}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        postsContainer.innerHTML = '<p class="error">Failed to load posts. Please check if JSON Server is running.</p>';
        return [];
    }
}

// Fetch featured post (most recent)
async function fetchFeaturedPost() {
    try {
        const response = await fetch(`${API_URL}/posts?_sort=date&_order=desc&_limit=1`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        return posts.length > 0 ? posts[0] : null;
    } catch (error) {
        console.error('Error fetching featured post:', error);
        return null;
    }
}

// Load posts and display them
async function loadPosts(page = 1) {
    const posts = await fetchPosts(page);
    
    if (posts.length === 0 && page === 1) {
        postsContainer.innerHTML = '<p>No posts found. Create your first post in the admin panel!</p>';
        loadMoreBtn.style.display = 'none';
        return;
    }
    
    if (page === 1) {
        postsContainer.innerHTML = '';
    }
    
    // Add posts to container
    posts.forEach(post => {
        postsContainer.innerHTML += createPostCard(post);
    });
    
    // Show/hide load more button
    if (posts.length < postsPerPage) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
}

// Load featured post
async function loadFeaturedPost() {
    const featuredPost = await fetchFeaturedPost();
    
    if (featuredPost) {
        featuredArticleContainer.innerHTML = createFeaturedArticle(featuredPost);
    } else {
        featuredArticleContainer.innerHTML = '<p>No featured post available.</p>';
    }
}

// Initialize the page
async function init() {
    await loadFeaturedPost();
    await loadPosts(currentPage);
    
    // Add click event to load more button
    loadMoreBtn.addEventListener('click', async () => {
        currentPage++;
        await loadPosts(currentPage);
    });
    
    // Add click event to post cards (delegation)
    postsContainer.addEventListener('click', (e) => {
        const postCard = e.target.closest('.post-card');
        if (postCard) {
            const postId = postCard.getAttribute('data-id');
            window.location.href = `article.html?id=${postId}`;
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);