/**
 * FACEBOOK HOME PAGE INTERACTIVE ENGINE
 * Real-time reactions, instant comments, story viewer modal, and mini Messenger chat.
 * Friends: Insha, Aniqa, Sana, Wania · User: Roman Fatima
 */

// Toggle Like on Posts
function toggleLike(btn) {
  btn.classList.toggle('liked');
  const span = btn.querySelector('span');
  const isLiked = btn.classList.contains('liked');

  if (isLiked) {
    span.textContent = 'Liked';
    btn.style.color = '#0866ff';
  } else {
    span.textContent = 'Like';
    btn.style.color = '';
  }
}

// Focus Comment Input
function focusCommentInput(inputId) {
  const input = document.getElementById(inputId);
  if (input) {
    input.focus();
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Handle Comment Submit
function handleCommentSubmit(event, inputElement, postId) {
  if (event.key === 'Enter' && inputElement.value.trim() !== '') {
    event.preventDefault();
    const commentText = inputElement.value.trim();
    const postCard = document.getElementById(postId);
    if (!postCard) return;

    const commentsContainer = postCard.querySelector('.post-comments-container');
    const writeRow = postCard.querySelector('.write-comment-row');

    // Create New Comment DOM Element
    const newComment = document.createElement('div');
    newComment.className = 'comment-item';
    newComment.innerHTML = `
      <img src="img2.jpg" class="comment-avatar" alt="Roman Fatima">
      <div class="comment-bubble">
        <div class="comment-author-name">Roman Fatima</div>
        <div class="comment-body-text">${escapeHtml(commentText)}</div>
      </div>
    `;

    // Insert before the write row
    commentsContainer.insertBefore(newComment, writeRow);

    // Clear input
    inputElement.value = '';

    // Update comments count in engagement bar
    const statsBar = postCard.querySelector('.comments-shares-summary span');
    if (statsBar) {
      const match = statsBar.textContent.match(/\d+/);
      if (match) {
        const count = parseInt(match[0], 10) + 1;
        statsBar.textContent = `${count} comments`;
      }
    }
  }
}

// Helper: Escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Story Modal Engine
let storyTimer = null;

function openStoryModal(author, img, avatarClass, caption) {
  const modal = document.getElementById('storyModal');
  const modalImg = document.getElementById('modalStoryImg');
  const modalAuthor = document.getElementById('modalStoryAuthor');
  const modalCaption = document.getElementById('modalStoryCaption');
  const progressFill = document.getElementById('storyProgressFill');
  const modalAvatar = document.getElementById('modalStoryAvatar');

  if (!modal) return;

  modalImg.src = img;
  modalAuthor.textContent = author;
  modalCaption.textContent = caption;

  // Set avatar initial
  if (modalAvatar) {
    modalAvatar.textContent = author.charAt(0);
    modalAvatar.className = 'contact-avatar ' + (
      author.includes('Insha') ? 'insha-avatar' :
      author.includes('Aniqa') ? 'aniqa-avatar' :
      author.includes('Sana') ? 'sana-avatar' : 'wania-avatar'
    );
  }

  modal.style.display = 'flex';

  // Animate progress bar
  progressFill.style.width = '0%';
  let progress = 0;
  clearInterval(storyTimer);

  storyTimer = setInterval(() => {
    progress += 2;
    progressFill.style.width = progress + '%';
    if (progress >= 100) {
      clearInterval(storyTimer);
      closeStoryModal();
    }
  }, 100);
}

function closeStoryModal() {
  const modal = document.getElementById('storyModal');
  if (modal) {
    modal.style.display = 'none';
  }
  clearInterval(storyTimer);
}

// Mini Chat Messenger Dock
function openChat(friendName, avatarClass) {
  const chatDock = document.getElementById('chatDock');
  const targetName = document.getElementById('chatTargetName');
  const messagesBox = document.getElementById('chatMessages');

  if (!chatDock) return;

  targetName.textContent = friendName;
  chatDock.style.display = 'flex';

  // Customized default greeting per friend
  let initialMsg = "Hey Roman!! ✨ How is the Web Dev assignment coming along?";
  if (friendName.includes('Aniqa')) {
    initialMsg = "Hey Roman! Sipping my iced latte ☕ Are all 5 tasks ready to push?";
  } else if (friendName.includes('Sana')) {
    initialMsg = "Roman! Hope we get full marks on this lab 😴💅";
  } else if (friendName.includes('Wania')) {
    initialMsg = "Hey Roman! Loved the study session yesterday! 🌸";
  }

  messagesBox.innerHTML = `
    <div class="chat-bubble received">${initialMsg}</div>
  `;
}

function closeChat() {
  const chatDock = document.getElementById('chatDock');
  if (chatDock) {
    chatDock.style.display = 'none';
  }
}

function handleChatSend(event) {
  if (event.key === 'Enter') {
    sendChatMessage();
  }
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const messagesBox = document.getElementById('chatMessages');
  if (!input || !messagesBox || input.value.trim() === '') return;

  const msgText = input.value.trim();
  const sentBubble = document.createElement('div');
  sentBubble.className = 'chat-bubble sent';
  sentBubble.textContent = msgText;
  messagesBox.appendChild(sentBubble);

  input.value = '';
  messagesBox.scrollTop = messagesBox.scrollHeight;

  // Auto Reply after 1 second
  setTimeout(() => {
    const friendName = document.getElementById('chatTargetName').textContent;
    const replyBubble = document.createElement('div');
    replyBubble.className = 'chat-bubble received';
    replyBubble.textContent = `Aww Roman! You're the best! That's going to get an easy A+ from the teacher! 💖🌸`;
    messagesBox.appendChild(replyBubble);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }, 1000);
}

// Close Story Modal on Escape Key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeStoryModal();
  }
});
