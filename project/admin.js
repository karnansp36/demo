// const { Toast } = require("toaster-js/umd.js"); // const { Toast } = require("toaster-js/umd.js");
// import "toaster-js/default.scss";

new Toast("Welcome!");
// API Configuration
const API_URL = 'http://localhost:3000';

// DOM Elements
const postForm = document.getElementById('post-form');
const postsContainer = document.getElementById('admin-posts-container');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const previewBtn = document.getElementById('preview-btn');

// Form fields
const postIdField = document.getElementById('post-id');
const titleField = document.getElementById('title');
const authorField = document.getElementById('author');
const categoryField = document.getElementById('category');
const imageField = document.getElementById('image');
const excerptField = document.getElementById('excerpt');
const contentField = document.getElementById('content');

// Current editing state
let isEditing = false;
let currentEditId = null;

// Format date to readable format
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Create admin post item HTML
function createAdminPostItem(post) {
    return `
        <div class="admin-post-item" data-id="${post.id}">
            <div class="admin-post-info">
                <h4>${post.title}</h4>
                <div class="admin-post-meta">
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                    ${post.category ? `<span><i class="fas fa-tag"></i> ${post.category}</span>` : ''}
                </div>
            </div>
            <div class="admin-post-actions">
                <button class="action-btn edit" data-id="${post.id}">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="action-btn delete" data-id="${post.id}">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `;
}

// Fetch all posts from JSON Server
async function fetchPosts() {
    try {
        const response = await fetch(`${API_URL}/posts?_sort=date&_order=desc`);
        
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

// Load posts and display them
async function loadPosts() {
    const posts = await fetchPosts();
    
    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No posts yet. Create your first post!</p>';
        return;
    }
    
    postsContainer.innerHTML = '';
    
    // Add posts to container
    posts.forEach(post => {
        postsContainer.innerHTML += createAdminPostItem(post);
    });
}

// Reset form to initial state
function resetForm() {
    postForm.reset();
    postIdField.value = '';
    submitBtn.textContent = 'Publish Post';
    isEditing = false;
    currentEditId = null;
    
    // Remove any existing preview
    const existingPreview = document.querySelector('.preview-section');
    if (existingPreview) {
        existingPreview.remove();
    }
}

// Load post data into form for editing
async function loadPostForEditing(id) {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const post = await response.json();
        
        // Fill form with post data
        postIdField.value = post.id;
        titleField.value = post.title;
        authorField.value = post.author;
        categoryField.value = post.category || '';
        imageField.value = post.image || '';
        excerptField.value = post.excerpt;
        contentField.value = post.content;
        
        // Update UI
        submitBtn.textContent = 'Update Post';
        isEditing = true;
        currentEditId = id;
        
        // Scroll to form
        document.getElementById('create-post').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Error loading post for editing:', error);
        alert('Failed to load post for editing. Please try again.');
    }
}

// Delete post
async function deletePost(id) {
    if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Reload posts
        await loadPosts();
        alert('Post deleted successfully!');
    } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post. Please try again.');
    }
}

// Create or update post
async function savePost(postData) {
    const url = isEditing ? `${API_URL}/posts/${currentEditId}` : `${API_URL}/posts`;
    const method = isEditing ? 'PUT' : 'POST';
    
    // Add date if creating new post
    if (!isEditing) {
        postData.date = new Date().toISOString();
    }
    
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error saving post:', error);
        throw error;
    }
}

// Handle form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const postData = {
        title: titleField.value.trim(),
        author: authorField.value.trim(),
        category: categoryField.value.trim() || null,
        image: imageField.value.trim() || null,
        excerpt: excerptField.value.trim(),
        content: contentField.value.trim()
    };
    
    // Validate required fields
    if (!postData.title || !postData.author || !postData.excerpt || !postData.content) {
        alert('Please fill in all required fields (title, author, excerpt, and content).');
        return;
    }
    
    // Disable submit button while saving
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Saving...';
    submitBtn.disabled = true;
    
    try {
        await savePost(postData);
        
        // Show success message
        alert(`Post ${isEditing ? 'updated' : 'published'} successfully!`);
        
        // Reset form and reload posts
        resetForm();
        await loadPosts();
    } catch (error) {
        alert(`Failed to ${isEditing ? 'update' : 'publish'} post. Please try again.`);
    } finally {
        // Re-enable submit button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Show preview of post
function showPreview() {
    // Get form data
    const postData = {
        title: titleField.value.trim() || 'Preview Title',
        author: authorField.value.trim() || 'Preview Author',
        category: categoryField.value.trim() || 'Uncategorized',
        image: imageField.value.trim() || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        excerpt: excerptField.value.trim() || 'Preview excerpt text...',
        content: contentField.value.trim() || 'Preview content would appear here...'
    };
    
    // Remove any existing preview
    const existingPreview = document.querySelector('.preview-section');
    if (existingPreview) {
        existingPreview.remove();
    }
    
    // Create preview HTML
    const previewHTML = `
        <div class="preview-section" style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
            <h3><i class="fas fa-eye"></i> Post Preview</h3>
            <div class="post-card">
                <div class="post-image">
                    <img src="${postData.image}" alt="${postData.title}">
                </div>
                <div class="post-content">
                    <h3>${postData.title}</h3>
                    <div class="post-meta">
                        <span><i class="fas fa-user"></i> ${postData.author}</span>
                        <span><i class="fas fa-calendar"></i> ${formatDate(new Date().toISOString())}</span>
                        ${postData.category ? `<span><i class="fas fa-tag"></i> ${postData.category}</span>` : ''}
                    </div>
                    <p class="post-excerpt">${postData.excerpt}</p>
                    <div class="preview-content" style="margin-top: 15px; padding: 15px; background-color: #f9f9f9; border-radius: 4px;">
                        <p><strong>Content Preview:</strong></p>
                        <p>${postData.content.substring(0, 200)}${postData.content.length > 200 ? '...' : ''}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert preview after the form
    postForm.insertAdjacentHTML('afterend', previewHTML);
}

// Initialize the admin panel
async function init() {
    new Toast("Welcome!");
    // Load existing posts
    await loadPosts();
    
    // Set up form event listeners
    postForm.addEventListener('submit', handleFormSubmit);
    resetBtn.addEventListener('click', resetForm);
    previewBtn.addEventListener('click', showPreview);
    
    // Set up event delegation for post actions
    postsContainer.addEventListener('click', async (e) => {
        const target = e.target;
        const actionBtn = target.closest('.action-btn');
        
        if (!actionBtn) return;
        
        const id = actionBtn.getAttribute('data-id');
        
        if (actionBtn.classList.contains('edit')) {
            await loadPostForEditing(id);
        } else if (actionBtn.classList.contains('delete')) {
            await deletePost(id);
        }
    });
    
    // Add some sample data if no posts exist
    const posts = await fetchPosts();
    if (posts.length === 0) {
        console.log('No posts found. You can add sample data through the admin panel.');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);