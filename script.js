/* ===== blok JS 1 ===== */
    /* GANTI DENGAN CONFIG FIREBASE PROJECT KAMU */
    const firebaseConfig = {
  apiKey: "AIzaSyALX1VoDYvfxPLNs0wSJQ-bxTzlNDmXSAA",
  authDomain: "orvexa-dcd9f.firebaseapp.com",
  projectId: "orvexa-dcd9f",
  storageBucket: "orvexa-dcd9f.firebasestorage.app",
  messagingSenderId: "1056087826351",
  appId: "1:1056087826351:web:f35f28e587e41caf6b995a",
  measurementId: "G-N9165BHK4G"
};
    firebase.initializeApp(firebaseConfig);
    window.orvexaAuth = firebase.auth();
    window.orvexaDb = firebase.firestore();
  

/* ===== blok JS 2 ===== */
    const SYSTEM_AVATAR = "https://files.catbox.moe/x9zpp5.png";

    // DICTIONARY MULTI-LANGUAGE (DEFAULT: ENGLISH)
    const translations = {
      en: {
        loading_text: "Entering OrVexa...",
        welcome_to: "Welcome to",
        landing_desc: "Connect with anyone,<br>anytime, anywhere.",
        btn_signin: "Sign In",
        btn_signup: "Sign Up",
        btn_create_account: "Create Account",
        signin_title: "Sign In",
        signin_subtitle: "Welcome back! Please sign in<br>to continue.",
        label_email_username: "Email or Username",
        label_password: "Password",
        remember_me: "Remember me",
        forgot_pass: "Forgot Password?",
        or_continue: "or continue with",
        no_account: "Don't have an account?",
        signup_title: "Sign Up",
        signup_subtitle: "Create your account<br>to get started.",
        label_fullname: "Full Name",
        label_username: "Username",
        label_email: "Email",
        label_confirm_pass: "Confirm Password",
        agree_terms: "I agree to Terms & Policy",
        has_account: "Already have an account?",
        tab_chats: "Chats",
        tab_stories: "Stories",
        tab_groups: "Groups",
        tab_settings: "Settings",
        tab_profile: "Profile",
        my_profile: "My Profile",
        label_profile_link: "Public Link",
        sec_profile_link: "Profile Link",
        sec_account_info: "Account Info",
        item_change_photo: "Change Profile Photo",
        sheet_edit: "Edit",
        search_placeholder: "Search chats or users",
        add_story: "Add Story",
        recent_chats: "Recent Chats",
        your_story: "Your Story",
        my_story: "My Story",
        story_tap_hint: "Tap to view or add update",
        recent_updates: "Recent Updates",
        group_dev_msg: "Group Chat feature is currently under development.",
        group_account: "Settings Account",
        item_edit_profile: "Edit Profile",
        item_username: "Username",
        group_appearance: "Appearance",
        item_theme: "Theme Mode",
        item_accent: "Accent Color",
        item_wallpaper: "Chat Wallpaper",
        item_reset_wallpaper: "Reset Default Wallpaper",
        item_font_size: "Font Size",
        group_language: "Language",
        item_app_language: "App Language",
        group_about: "About",
        item_about: "About OrVexa",
        item_version: "Version",
        item_license: "Open Source License",
        btn_logout: "Log Out",
        chat_options: "Chat Options",
        opt_clear_chat: "Clear Chat",
        opt_wallpaper_this: "Wallpaper This Chat",
        opt_reset_wallpaper: "Reset Wallpaper to Default",
        opt_block: "Block User",
        modal_add_user: "Add User",
        modal_enter_username: "Enter Username",
        btn_search_user: "Search User",
        btn_close: "Close",
        modal_edit_profile: "Edit Profile",
        btn_save_changes: "Save Changes",
        btn_cancel: "Cancel",
        modal_edit_username: "Edit Username",
        modal_new_username: "New Username",
        btn_save_username: "Save Username",
        modal_add_caption: "Add Caption",
        btn_post_story: "Post Story",
        no_friends_story: "No story updates from friends yet.",
        input_type_msg: "Type a message...",
        today_at: "Today at "
      },
      id: {
        loading_text: "Masuk ke OrVexa...",
        welcome_to: "Selamat Datang di",
        landing_desc: "Terhubung dengan siapa saja,<br>kapan saja, di mana saja.",
        btn_signin: "Masuk",
        btn_signup: "Daftar",
        btn_create_account: "Buat Akun",
        signin_title: "Masuk",
        signin_subtitle: "Selamat datang kembali! Silakan masuk<br>untuk melanjutkan.",
        label_email_username: "Email atau Username",
        label_password: "Password",
        remember_me: "Ingat saya",
        forgot_pass: "Lupa Password?",
        or_continue: "atau lanjutkan dengan",
        no_account: "Belum punya akun?",
        signup_title: "Daftar",
        signup_subtitle: "Buat akun Anda<br>untuk memulai.",
        label_fullname: "Nama Lengkap",
        label_username: "Username",
        label_email: "Email",
        label_confirm_pass: "Konfirmasi Password",
        agree_terms: "Saya menyetujui Syarat & Ketentuan",
        has_account: "Sudah punya akun?",
        tab_chats: "Pesan",
        tab_stories: "Story",
        tab_groups: "Grup",
        tab_settings: "Pengaturan",
        tab_profile: "Profil",
        my_profile: "Profil Saya",
        label_profile_link: "Tautan Publik",
        sec_profile_link: "Tautan Profil",
        sec_account_info: "Informasi Akun",
        item_change_photo: "Ganti Foto Profil",
        sheet_edit: "Ubah",
        search_placeholder: "Cari obrolan atau pengguna",
        add_story: "Tambah Story",
        recent_chats: "Obrolan Terbaru",
        your_story: "Story Anda",
        my_story: "Story Saya",
        story_tap_hint: "Ketuk untuk melihat atau menambah update",
        recent_updates: "Pembaruan Terbaru",
        group_dev_msg: "Fitur Group Chat sedang dalam pengembangan.",
        group_account: "Pengaturan Akun",
        item_edit_profile: "Edit Profil",
        item_username: "Username",
        group_appearance: "Tampilan",
        item_theme: "Mode Tema",
        item_accent: "Warna Aksen",
        item_wallpaper: "Wallpaper Chat",
        item_reset_wallpaper: "Reset Wallpaper Default",
        item_font_size: "Ukuran Font",
        group_language: "Bahasa",
        item_app_language: "Bahasa Aplikasi",
        group_about: "Tentang",
        item_about: "Tentang OrVexa",
        item_version: "Versi",
        item_license: "Lisensi Open Source",
        btn_logout: "Keluar",
        chat_options: "Opsi Chat",
        opt_clear_chat: "Bersihkan Chat",
        opt_wallpaper_this: "Wallpaper Chat Ini",
        opt_reset_wallpaper: "Reset Wallpaper Ke Default",
        opt_block: "Blokir Pengguna",
        modal_add_user: "Tambah Pengguna",
        modal_enter_username: "Masukkan Username",
        btn_search_user: "Cari Pengguna",
        btn_close: "Tutup",
        modal_edit_profile: "Edit Profil",
        btn_save_changes: "Simpan Perubahan",
        btn_cancel: "Batal",
        modal_edit_username: "Edit Username",
        modal_new_username: "Username Baru",
        btn_save_username: "Simpan Username",
        modal_add_caption: "Tambah Keterangan",
        btn_post_story: "Posting Story",
        no_friends_story: "Belum ada pembaruan story dari teman.",
        input_type_msg: "Ketik pesan...",
        today_at: "Hari ini "
      }
    };

    // HELPER LOCALSTORAGE PERSISTEN
    function getStoredData(key, defaultVal) {
      const data = localStorage.getItem('orvexa_' + key);
      return data ? JSON.parse(data) : defaultVal;
    }

    function setStoredData(key, val) {
      if (window.orvexaSync) window.orvexaSync.prep(key, val);
      localStorage.setItem('orvexa_' + key, JSON.stringify(val));
      if (window.orvexaSync) window.orvexaSync.push(key, val);
    }

    // STATE UTAMA APP
    let registeredUsers = getStoredData('users', []);
    let chatsDb = getStoredData('chatsDb', {});
    let friendsDb = getStoredData('friendsDb', {});
    let storiesDb = getStoredData('storiesDb', {});
    let currentUser = getStoredData('currentUser', null);
    let wallpapersDb = getStoredData('wallpapersDb', {});
    let currentLang = getStoredData('appLang', 'en'); // DEFAULT ENGLISH
    let currentFontSize = getStoredData('fontSize', '14px');

    let activeChatUser = null;
    let isSystemChat = false;
    let currentViewingStoryUser = null;
    let tempStoryImg = "";

    window.onload = function() {
      applyLanguage(currentLang);
      changeFontSize(currentFontSize);
      document.getElementById('lang-select').value = currentLang;
      document.getElementById('font-size-select').value = currentFontSize;

      checkExpiredStories();
      if (currentUser) {
        setUserStatus(currentUser.username, true);
        renderDashboard();
        showScreen('dashboard-screen');
      }
    };

    window.onbeforeunload = function() {
      if (currentUser) {
        setUserStatus(currentUser.username, false);
      }
    };

    function setUserStatus(username, isOnline) {
      registeredUsers = getStoredData('users', []);
      const idx = registeredUsers.findIndex(u => u.username === username);
      if (idx !== -1) {
        registeredUsers[idx].isOnline = isOnline;
        setStoredData('users', registeredUsers);
      }
    }

    // MULTI LANGUAGE SWITCHER
    function changeLanguage(lang) {
      currentLang = lang;
      setStoredData('appLang', lang);
      applyLanguage(lang);
      if (currentUser) {
        renderDashboard();
        renderStoriesTab();
      }
    }

    function applyLanguage(lang) {
      const t = translations[lang] || translations.en;
      document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (t[key]) {
          elem.innerHTML = t[key];
        }
      });

      // Update Input Placeholders
      const searchInp = document.getElementById('search-chat-input');
      if (searchInp) searchInp.placeholder = t.search_placeholder;

      const chatInp = document.getElementById('chat-input');
      if (chatInp) chatInp.placeholder = t.input_type_msg;

      renderAboutPageContent(lang);
    }

    // FONT SIZE SYSTEM
    function changeFontSize(size) {
      currentFontSize = size;
      setStoredData('fontSize', size);
      document.documentElement.style.setProperty('--font-base', size);
    }

    // RENDER HALAMAN ABOUT ORVEXA
    function renderAboutPageContent(lang) {
      const container = document.getElementById('about-page-content');
      if (!container) return;

      if (lang === 'id') {
        container.innerHTML = `
          <div class="info-card">
            <h3 style="font-size:1.4em; font-weight:700; margin-bottom:4px; color:var(--text-main);">OrVexa</h3>
            <p style="color:var(--accent-color); font-weight:600; margin-bottom:12px;">More Than Messages</p>
            <p>OrVexa masih dalam tahap pengembangan. Aplikasi ini dirancang sebagai platform komunikasi modern yang cepat, sederhana, dan nyaman untuk membantu pengguna terhubung dengan teman, komunitas, serta orang-orang terdekat dalam satu tempat.</p>
          </div>

          <div class="info-card">
            <h3>Fitur Utama</h3>
            
            <h4>Real-time Messaging</h4>
            <p>Kirim dan terima pesan dengan pengalaman chatting yang cepat dan responsif.</p>

            <h4>Group Chat — Dalam Pengembangan</h4>
            <p>Fitur untuk membuat grup, mengelola anggota, dan berkomunikasi dalam satu ruang bersama masih dalam tahap pengembangan.</p>

            <h4>Share Media & Files — Dalam Pengembangan</h4>
            <p>Kemampuan untuk membagikan foto, video, dokumen, dan berbagai file sedang dikembangkan.</p>

            <h4>Status & Story</h4>
            <p>Bagikan aktivitas dan momen terbaru melalui status atau story.</p>

            <h4>Explore Communities</h4>
            <p>Temukan berbagai komunitas berdasarkan minat, topik, dan aktivitas yang kamu sukai.</p>

            <h4>People Discovery</h4>
            <p>Cari dan temukan pengguna lain dengan mudah.</p>

            <h4>Search</h4>
            <p>Cari pengguna, percakapan, grup, maupun pesan secara cepat.</p>

            <h4>Privacy & Security — Dalam Pengembangan</h4>
            <p>Sistem privasi dan keamanan OrVexa masih dalam proses pengembangan untuk memberikan kontrol dan perlindungan yang lebih baik bagi pengguna.</p>

            <h4>Personalization</h4>
            <p>OrVexa menyediakan pilihan tampilan yang dapat disesuaikan, seperti Dark Mode, Light Mode, System Default, Accent Color, dan Chat Wallpaper.</p>
          </div>

          <div class="info-card">
            <h3>Settings</h3>
            <h4>Account</h4>
            <p>Kelola informasi dan pengaturan akun.</p>
            
            <h4>Privacy & Security — Dalam Pengembangan</h4>
            <p>Pengaturan privasi dan keamanan akun masih dalam tahap pengembangan.</p>

            <h4>Appearance</h4>
            <p>Sesuaikan tema, warna aksen, dan tampilan aplikasi.</p>

            <h4>Language</h4>
            <p>Pilih bahasa yang digunakan dalam aplikasi.</p>
          </div>

          <div class="info-card" style="text-align:center; padding: 24px 18px;">
            <h3 style="font-size:1.2em; color:var(--text-main); margin-bottom:6px;">Welcome to OrVexa</h3>
            <p style="color:var(--accent-color); font-weight:600; margin-bottom:12px;">Chat. Share. Stay Connected.</p>
            <p style="font-size:0.88em; margin-bottom:15px;">OrVexa dikembangkan untuk menciptakan pengalaman komunikasi yang lebih sederhana, modern, dan terorganisir. Beberapa fitur masih dalam tahap pengembangan dan akan terus disempurnakan seiring perkembangan aplikasi.</p>
            <strong style="color:var(--text-main); font-size:0.95em;">OrVexa — Stay Connected Without Limits.</strong>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="info-card">
            <h3 style="font-size:1.4em; font-weight:700; margin-bottom:4px; color:var(--text-main);">OrVexa</h3>
            <p style="color:var(--accent-color); font-weight:600; margin-bottom:12px;">More Than Messages</p>
            <p>OrVexa is still under active development. This app is designed as a modern, fast, simple, and comfortable communication platform to help users connect with friends, communities, and loved ones in one place.</p>
          </div>

          <div class="info-card">
            <h3>Key Features</h3>
            
            <h4>Real-time Messaging</h4>
            <p>Send and receive messages with a fast and responsive chatting experience.</p>

            <h4>Group Chat — Under Development</h4>
            <p>Features to create groups, manage members, and communicate in a shared space are under development.</p>

            <h4>Share Media & Files — Under Development</h4>
            <p>The ability to share photos, videos, documents, and various files is being developed.</p>

            <h4>Status & Story</h4>
            <p>Share your latest activities and moments via status or story.</p>

            <h4>Explore Communities</h4>
            <p>Discover various communities based on your interests, topics, and favorite activities.</p>

            <h4>People Discovery</h4>
            <p>Search and find other users easily.</p>

            <h4>Search</h4>
            <p>Quickly search for users, conversations, groups, or messages.</p>

            <h4>Privacy & Security — Under Development</h4>
            <p>OrVexa's privacy and security system is still under development to provide better control and protection.</p>

            <h4>Personalization</h4>
            <p>OrVexa provides customizable interface options, such as Dark Mode, Light Mode, System Default, Accent Color, and Chat Wallpaper.</p>
          </div>

          <div class="info-card">
            <h3>Settings</h3>
            <h4>Account</h4>
            <p>Manage account information and settings.</p>

            <h4>Privacy & Security — Under Development</h4>
            <p>Account privacy and security settings are still under development.</p>

            <h4>Appearance</h4>
            <p>Customize theme, accent color, and app look.</p>

            <h4>Language</h4>
            <p>Choose your preferred app language.</p>
          </div>

          <div class="info-card" style="text-align:center; padding: 24px 18px;">
            <h3 style="font-size:1.2em; color:var(--text-main); margin-bottom:6px;">Welcome to OrVexa</h3>
            <p style="color:var(--accent-color); font-weight:600; margin-bottom:12px;">Chat. Share. Stay Connected.</p>
            <p style="font-size:0.88em; margin-bottom:15px;">OrVexa was built to create a simpler, more modern, and organized communication experience. Several features are under development and will be refined over time.</p>
            <strong style="color:var(--text-main); font-size:0.95em;">OrVexa — Stay Connected Without Limits.</strong>
          </div>
        `;
      }
    }

    // AUTO RESIZE TEXTAREA
    function autoResizeTextarea(elem) {
      elem.style.height = 'auto';
      elem.style.height = Math.min(elem.scrollHeight, 120) + 'px';
    }

    // NAVIGATION TABS CONTROL
    function switchTab(tabName) {
      document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
      document.getElementById('main-bottom-nav').style.display = 'flex';

      if (tabName === 'chats') {
        document.getElementById('nav-chats').classList.add('active');
        renderDashboard();
        showScreen('dashboard-screen');
      } else if (tabName === 'stories') {
        document.getElementById('nav-stories').classList.add('active');
        renderStoriesTab();
        showScreen('stories-tab-screen');
      } else if (tabName === 'groups') {
        document.getElementById('nav-groups').classList.add('active');
        showScreen('groups-tab-screen');
      } else if (tabName === 'settings') {
        document.getElementById('nav-settings').classList.add('active');
        renderSettingsTab();
        showScreen('settings-tab-screen');
      }
    }

    // EFEK PINDAH HALAMAN
    function showScreen(screenId) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById(screenId).classList.add('active');

      const bottomNav = document.getElementById('main-bottom-nav');
      if (['landing-screen', 'signin-screen', 'signup-screen', 'chat-room-screen', 'about-screen', 'license-screen', 'user-info-screen'].includes(screenId)) {
        bottomNav.style.display = 'none';
      } else {
        bottomNav.style.display = 'flex';
      }
    }

    function togglePassword(id, icon) {
      const input = document.getElementById(id);
      if (input.type === "password") {
        input.type = "text";
        icon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        input.type = "password";
        icon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    }

    // SIGN UP REAL
    function handleSignUp(e) {
      e.preventDefault();
      const name = document.getElementById('signup-fullname').value.trim();
      const username = document.getElementById('signup-username').value.trim().toLowerCase();
      const email = document.getElementById('signup-email').value.trim().toLowerCase();
      const pass = document.getElementById('signup-pass').value;
      const confirmPass = document.getElementById('signup-confirm-pass').value;
      const errorElem = document.getElementById('signup-error');

      if (pass !== confirmPass) {
        errorElem.innerText = currentLang === 'id' ? "Konfirmasi Password tidak cocok!" : "Password confirmation does not match!";
        errorElem.style.display = 'block';
        return;
      }

      registeredUsers = getStoredData('users', []);
      if (registeredUsers.some(u => u.username === username || u.email === email)) {
        errorElem.innerText = currentLang === 'id' ? "Username atau Email sudah terdaftar!" : "Username or Email already registered!";
        errorElem.style.display = 'block';
        return;
      }

      const newUser = {
        name: name,
        username: username,
        email: email,
        password: pass,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
        isOnline: false
      };

      registeredUsers.push(newUser);
      setStoredData('users', registeredUsers);

      errorElem.style.display = 'none';
      alert(currentLang === 'id' ? 'Akun berhasil dibuat! Silakan Sign In.' : 'Account created successfully! Please Sign In.');
      showScreen('signin-screen');
    }

    // SIGN IN REAL
    function handleSignIn(e) {
      e.preventDefault();
      const input = document.getElementById('signin-username').value.trim().toLowerCase();
      const pass = document.getElementById('signin-pass').value;
      const errorElem = document.getElementById('signin-error');

      registeredUsers = getStoredData('users', []);
      const foundUser = registeredUsers.find(u => 
        (u.username === input || u.email === input) && u.password === pass
      );

      if (!foundUser) {
        errorElem.innerText = currentLang === 'id' ? "Akun tidak ditemukan atau password salah!" : "Account not found or password incorrect!";
        errorElem.style.display = 'block';
        return;
      }

      errorElem.style.display = 'none';
      currentUser = foundUser;
      setStoredData('currentUser', currentUser);
      setUserStatus(currentUser.username, true);

      document.getElementById('loading-screen').style.display = 'flex';
      setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        switchTab('chats');
      }, 1200);
    }

    function handleLogOut() {
      if (currentUser) {
        setUserStatus(currentUser.username, false);
      }
      currentUser = null;
      localStorage.removeItem('orvexa_currentUser');
      showScreen('landing-screen');
    }

    function renderDashboard() {
      if (!currentUser) return;
      checkExpiredStories();

      const t = translations[currentLang] || translations.en;
      storiesDb = getStoredData('storiesDb', {});
      const myStory = storiesDb[currentUser.username];
      document.getElementById('my-story-img').src = myStory ? myStory.img : currentUser.avatar;

      if (myStory) {
        document.getElementById('my-story-avatar-wrapper').classList.add('has-story');
        document.getElementById('my-story-plus').style.display = 'none';
        document.getElementById('my-story-text').innerText = t.my_story;
      } else {
        document.getElementById('my-story-avatar-wrapper').classList.remove('has-story');
        document.getElementById('my-story-plus').style.display = 'flex';
        document.getElementById('my-story-text').innerText = t.add_story;
      }

      renderFriendsStories();
      renderChatsList();
    }

    function renderStoriesTab() {
      if (!currentUser) return;
      checkExpiredStories();

      const t = translations[currentLang] || translations.en;
      storiesDb = getStoredData('storiesDb', {});
      const myStory = storiesDb[currentUser.username];

      document.getElementById('my-story-img-tab').src = myStory ? myStory.img : currentUser.avatar;
      if (myStory) {
        document.getElementById('my-story-avatar-wrapper-tab').classList.add('has-story');
        document.getElementById('my-story-plus-tab').style.display = 'none';
        document.getElementById('my-story-text-tab').innerText = t.my_story;
      } else {
        document.getElementById('my-story-avatar-wrapper-tab').classList.remove('has-story');
        document.getElementById('my-story-plus-tab').style.display = 'flex';
        document.getElementById('my-story-text-tab').innerText = t.add_story;
      }

      const container = document.getElementById('stories-tab-vertical-list');
      container.innerHTML = '';

      friendsDb = getStoredData('friendsDb', {});
      registeredUsers = getStoredData('users', []);

      const myFriends = friendsDb[currentUser.username] || [];
      let count = 0;

      myFriends.forEach(fUsername => {
        const friend = registeredUsers.find(u => u.username === fUsername);
        const story = storiesDb[fUsername];

        if (friend && story) {
          count++;
          container.innerHTML += `
            <div class="story-card-item" onclick="openStoryViewer('${friend.username}')">
              <div class="story-avatar-wrapper has-story">
                <img src="${friend.avatar}" class="story-avatar">
              </div>
              <div>
                <strong style="color: var(--text-main); font-size: 1.05em;">${friend.name}</strong><br>
                <span style="color: var(--text-muted); font-size: 0.85em;">${t.today_at} ${story.time}</span>
              </div>
            </div>
          `;
        }
      });

      if (count === 0) {
        container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9em; text-align: center; padding: 20px;">${t.no_friends_story}</p>`;
      }
    }

    function renderSettingsTab() {
      if (!currentUser) return;
      registeredUsers = getStoredData('users', []);
      const user = registeredUsers.find(u => u.username === currentUser.username) || currentUser;

      document.getElementById('settings-user-avatar').src = user.avatar;
      document.getElementById('settings-user-name').innerText = user.name;
      document.getElementById('settings-user-username').innerText = `@${user.username}`;
    }

    // EDIT PROFILE & USERNAME FUNCTIONS
    function openEditProfileModal() {
      document.getElementById('edit-fullname-input').value = currentUser.name;
      document.getElementById('edit-profile-modal').classList.add('active');
    }
    function closeEditProfileModal() {
      document.getElementById('edit-profile-modal').classList.remove('active');
    }
    function saveProfileChanges() {
      const newName = document.getElementById('edit-fullname-input').value.trim();
      if (!newName) return;
      registeredUsers = getStoredData('users', []);
      const idx = registeredUsers.findIndex(u => u.username === currentUser.username);
      if (idx !== -1) {
        registeredUsers[idx].name = newName;
        setStoredData('users', registeredUsers);
        currentUser.name = newName;
        setStoredData('currentUser', currentUser);
        renderSettingsTab();
        closeEditProfileModal();
      }
    }

    function openEditUsernameModal() {
      document.getElementById('edit-username-input').value = currentUser.username;
      document.getElementById('edit-username-error').style.display = 'none';
      document.getElementById('edit-username-modal').classList.add('active');
    }
    function closeEditUsernameModal() {
      document.getElementById('edit-username-modal').classList.remove('active');
    }
    function saveUsernameChanges() {
      const newUsername = document.getElementById('edit-username-input').value.trim().toLowerCase();
      const errElem = document.getElementById('edit-username-error');
      if (!newUsername) return;
      if (newUsername === currentUser.username) {
        closeEditUsernameModal();
        return;
      }
      registeredUsers = getStoredData('users', []);
      if (registeredUsers.some(u => u.username === newUsername)) {
        errElem.innerText = currentLang === 'id' ? "Username sudah digunakan!" : "Username already in use!";
        errElem.style.display = "block";
        return;
      }

      const oldUsername = currentUser.username;
      const idx = registeredUsers.findIndex(u => u.username === oldUsername);
      if (idx !== -1) {
        registeredUsers[idx].username = newUsername;
        setStoredData('users', registeredUsers);
        currentUser.username = newUsername;
        setStoredData('currentUser', currentUser);
        renderSettingsTab();
        closeEditUsernameModal();
      }
    }

    // APPEARANCE FUNCTIONS
    function changeTheme(val) {
      if (val === 'light') {
        document.body.classList.add('light-theme');
      } else if (val === 'dark') {
        document.body.classList.remove('light-theme');
      } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          document.body.classList.add('light-theme');
        } else {
          document.body.classList.remove('light-theme');
        }
      }
    }

    function changeAccentColor(colorHex) {
      document.documentElement.style.setProperty('--accent-color', colorHex);
      document.documentElement.style.setProperty('--accent-gradient', colorHex);
    }

    // EDIT PROFILE AVATAR
    function triggerProfileChange() {
      document.getElementById('profile-file-input').click();
    }

    function uploadProfileAvatar(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          const newAvatar = evt.target.result;
          registeredUsers = getStoredData('users', []);
          const idx = registeredUsers.findIndex(u => u.username === currentUser.username);
          if (idx !== -1) {
            registeredUsers[idx].avatar = newAvatar;
            setStoredData('users', registeredUsers);
            currentUser.avatar = newAvatar;
            setStoredData('currentUser', currentUser);
            renderSettingsTab();
          }
        };
        reader.readAsDataURL(file);
      }
    }

    // ADD USER MODAL
    function openAddUserModal() {
      document.getElementById('add-user-modal').classList.add('active');
      document.getElementById('modal-log').innerHTML = '';
      document.getElementById('add-username-input').value = '';
    }

    function closeAddUserModal() {
      document.getElementById('add-user-modal').classList.remove('active');
    }

    function searchUser() {
      const input = document.getElementById('add-username-input').value.trim().toLowerCase();
      const log = document.getElementById('modal-log');

      if (input === currentUser.username) {
        log.innerHTML = `<p class="log-error">${currentLang === 'id' ? 'Tidak dapat menambahkan diri sendiri!' : 'Cannot add yourself!'}</p>`;
        return;
      }
      
      registeredUsers = getStoredData('users', []);
      const found = registeredUsers.find(u => u.username === input);

      if (!found) {
        log.innerHTML = `<p class="log-error">Invalid Username</p>`;
      } else {
        log.innerHTML = `
          <div class="user-found-card">
            <div>
              <strong style="font-size:0.9em; color:var(--text-main);">${found.name}${vb(found.username)}</strong><br>
              <span style="font-size:0.8em; color:var(--text-muted);">@${found.username}</span>${found.bio ? `<br><span style="font-size:0.78em; color:var(--text-muted);">${esc(found.bio)}</span>` : ''}
            </div>
            <button class="btn-small-chat" onclick="addUserAndChat('${found.username}')">Chats</button>
          </div>
        `;
      }
    }

    function addUserAndChat(username) {
      friendsDb = getStoredData('friendsDb', {});
      if (!friendsDb[currentUser.username]) {
        friendsDb[currentUser.username] = [];
      }

      if (!friendsDb[currentUser.username].includes(username)) {
        friendsDb[currentUser.username].push(username);
        setStoredData('friendsDb', friendsDb);
      }

      registeredUsers = getStoredData('users', []);
      const targetUser = registeredUsers.find(u => u.username === username);
      closeAddUserModal();
      openChat(targetUser, false);
    }

    // STORIES LOGIC HAPUS & AUTO EXPIRE
    function checkExpiredStories() {
      storiesDb = getStoredData('storiesDb', {});
      const now = Date.now();
      let changed = false;

      Object.keys(storiesDb).forEach(username => {
        const story = storiesDb[username];
        if (story && story.createdAt && (now - story.createdAt > 86400000)) {
          delete storiesDb[username];
          changed = true;
        }
      });

      if (changed) {
        setStoredData('storiesDb', storiesDb);
      }
    }

    function handleMyStoryClick() {
      storiesDb = getStoredData('storiesDb', {});
      const myStory = storiesDb[currentUser.username];
      if (myStory) {
        openStoryViewer(currentUser.username);
      } else {
        document.getElementById('story-file-input').click();
      }
    }

    function uploadStory(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          tempStoryImg = evt.target.result;
          document.getElementById('story-preview-img').src = tempStoryImg;
          document.getElementById('create-story-modal').classList.add('active');
        };
        reader.readAsDataURL(file);
      }
    }

    function submitStory() {
      const caption = document.getElementById('story-caption-input').value;
      const now = new Date();
      const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

      storiesDb[currentUser.username] = {
        img: tempStoryImg,
        caption: caption,
        time: timeStr,
        createdAt: Date.now(),
        views: [],
        likes: []
      };
      setStoredData('storiesDb', storiesDb);

      document.getElementById('create-story-modal').classList.remove('active');
      document.getElementById('story-caption-input').value = '';
      renderDashboard();
    }

    function renderFriendsStories() {
      const container = document.getElementById('friends-stories');
      container.innerHTML = '';

      friendsDb = getStoredData('friendsDb', {});
      registeredUsers = getStoredData('users', []);
      storiesDb = getStoredData('storiesDb', {});

      const myFriends = friendsDb[currentUser.username] || [];

      myFriends.forEach(fUsername => {
        const friend = registeredUsers.find(u => u.username === fUsername);
        const story = storiesDb[fUsername];

        if (friend && story) {
          container.innerHTML += `
            <div class="story-item" onclick="openStoryViewer('${friend.username}')">
              <div class="story-avatar-wrapper has-story">
                <img src="${friend.avatar}" class="story-avatar">
              </div>
              <span class="story-username">${friend.name.split(' ')[0]}</span>
            </div>
          `;
        }
      });
    }

    function openStoryViewer(storyUsername) {
      storiesDb = getStoredData('storiesDb', {});
      registeredUsers = getStoredData('users', []);

      const t = translations[currentLang] || translations.en;
      const story = storiesDb[storyUsername];
      if (!story) return;

      currentViewingStoryUser = storyUsername;
      const targetUser = registeredUsers.find(u => u.username === storyUsername) || currentUser;

      document.getElementById('view-story-username').innerHTML = esc(targetUser.name) + vb(targetUser.username);
      document.getElementById('view-story-avatar').src = targetUser.avatar;
      document.getElementById('view-story-image').src = story.img;
      document.getElementById('view-story-caption').innerText = story.caption || "";
      document.getElementById('view-story-time').innerText = t.today_at + (story.time || "");

      const isMyStory = (storyUsername === currentUser.username);

      if (isMyStory) {
        document.getElementById('btn-delete-story').style.display = 'block';
        document.getElementById('story-like-bar').style.display = 'none';
        document.getElementById('story-viewers-box').style.display = 'block';

        renderStoryViewers(story);

        if (story.likes && story.likes.length > 0) {
          triggerLoveAnimation();
        }
      } else {
        document.getElementById('btn-delete-story').style.display = 'none';
        document.getElementById('story-like-bar').style.display = 'flex';
        document.getElementById('story-viewers-box').style.display = 'none';

        recordStoryView(storyUsername);

        const hasLiked = story.likes && story.likes.includes(currentUser.username);
        const btnLike = document.getElementById('btn-like-act');
        const iconLike = document.getElementById('icon-like-act');

        if (hasLiked) {
          btnLike.classList.add('liked');
          iconLike.className = 'fa-solid fa-heart';
        } else {
          btnLike.classList.remove('liked');
          iconLike.className = 'fa-regular fa-heart';
        }
      }

      document.getElementById('story-viewer-modal').classList.add('active');
    }

    function recordStoryView(storyUsername) {
      storiesDb = getStoredData('storiesDb', {});
      const story = storiesDb[storyUsername];
      if (!story) return;

      if (!story.views) story.views = [];

      const existingView = story.views.find(v => v.username === currentUser.username);
      if (!existingView) {
        const now = new Date();
        const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        story.views.push({
          username: currentUser.username,
          time: timeStr
        });
        setStoredData('storiesDb', storiesDb);
      }
    }

    function toggleLikeStory() {
      if (!currentViewingStoryUser) return;
      storiesDb = getStoredData('storiesDb', {});
      const story = storiesDb[currentViewingStoryUser];
      if (!story) return;

      if (!story.likes) story.likes = [];

      const index = story.likes.indexOf(currentUser.username);
      const btnLike = document.getElementById('btn-like-act');
      const iconLike = document.getElementById('icon-like-act');

      if (index === -1) {
        story.likes.push(currentUser.username);
        btnLike.classList.add('liked');
        iconLike.className = 'fa-solid fa-heart';
        triggerLoveAnimation();
      } else {
        story.likes.splice(index, 1);
        btnLike.classList.remove('liked');
        iconLike.className = 'fa-regular fa-heart';
      }

      setStoredData('storiesDb', storiesDb);
    }

    function renderStoryViewers(story) {
      const container = document.getElementById('viewers-list');
      container.innerHTML = '';

      registeredUsers = getStoredData('users', []);
      const views = story.views || [];
      const likes = story.likes || [];

      document.getElementById('viewers-count-title').innerText = `Viewers (${views.length})`;

      if (views.length === 0) {
        container.innerHTML = `<div style="font-size:0.85em; color:var(--text-muted); text-align:center; padding:5px;">${currentLang === 'id' ? 'Belum ada penonton' : 'No viewers yet'}</div>`;
        return;
      }

      views.forEach(v => {
        const u = registeredUsers.find(user => user.username === v.username);
        const name = u ? u.name : v.username;
        const avatar = u ? u.avatar : `https://api.dicebear.com/7.x/avataaars/svg?seed=${v.username}`;
        const isLiked = likes.includes(v.username);

        container.innerHTML += `
          <div class="viewer-item">
            <div class="viewer-info">
              <img src="${avatar}">
              <span class="viewer-name">
                ${name}${vb(v.username)}
                ${isLiked ? '<i class="fa-solid fa-heart" style="color:#ef4444; font-size:0.8em;"></i>' : ''}
              </span>
            </div>
            <span class="viewer-time">${v.time}</span>
          </div>
        `;
      });
    }

    function triggerLoveAnimation() {
      const container = document.getElementById('story-img-container');
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const heart = document.createElement('i');
          heart.className = 'fa-solid fa-heart floating-love';
          heart.style.left = (30 + Math.random() * 40) + '%';
          heart.style.top = (50 + Math.random() * 20) + '%';
          container.appendChild(heart);

          setTimeout(() => heart.remove(), 1500);
        }, i * 200);
      }
    }

    function deleteMyStory() {
      const confirmMsg = currentLang === 'id' ? 'Apakah kamu yakin ingin menghapus story ini?' : 'Are you sure you want to delete this story?';
      if (confirm(confirmMsg)) {
        storiesDb = getStoredData('storiesDb', {});
        delete storiesDb[currentUser.username];
        setStoredData('storiesDb', storiesDb);

        closeStoryViewer();
        renderDashboard();
      }
    }

    function closeStoryViewer() {
      document.getElementById('story-viewer-modal').classList.remove('active');
      currentViewingStoryUser = null;
    }

    // CHAT ROOM & STATUS USER
    function getChatRoomId(userA, userB) {
      return [userA, userB].sort().join('_vs_');
    }

    function renderChatsList() {
      const container = document.getElementById('chats-list-wrapper');
      registeredUsers = getStoredData('users', []);
      chatsDb = getStoredData('chatsDb', {});
      
      container.innerHTML = `
        <div class="chat-item" onclick="openChat({ name: 'Chat System', avatar: '${SYSTEM_AVATAR}' }, true)">
          <img src="${SYSTEM_AVATAR}" class="chat-avatar">
          <div class="chat-info">
            <div class="chat-top-row">
              <span class="chat-name">Chat System <span class="badge-system">OFFICIAL</span></span>
              <span class="chat-time">Now</span>
            </div>
            <div class="user-status-text status-online"><span class="status-dot"></span> Online</div>
            <p class="chat-last-msg">Welcome to OrVexa! Check new updates here.</p>
          </div>
        </div>
      `;

      friendsDb = getStoredData('friendsDb', {});
      const myFriends = friendsDb[currentUser.username] || [];

      myFriends.forEach(fUsername => {
        const friend = registeredUsers.find(u => u.username === fUsername);
        if (friend) {
          const chatId = getChatRoomId(currentUser.username, friend.username);
          const history = chatsDb[chatId] || [];
          const lastMsg = history.length > 0 ? esc(previewOf(history[history.length - 1])) : "Start chatting...";

          const unreadCount = history.filter(m => m.sender !== currentUser.username && !m.read).length;
          const unreadBadgeHtml = unreadCount > 0 ? `<div class="unread-badge">${unreadCount}</div>` : '';

          const statusClass = friend.isOnline ? 'status-online' : 'status-offline';
          const statusText = friend.isOnline ? 'Online' : 'Offline';

          container.innerHTML += `
            <div class="chat-item" onclick="openChat({ username: '${friend.username}', name: '${friend.name}', avatar: '${friend.avatar}', isOnline: ${friend.isOnline || false} }, false)">
              <img src="${friend.avatar}" class="chat-avatar">
              <div class="chat-info">
                <div class="chat-top-row">
                  <span class="chat-name">${friend.name}${vb(friend.username)}</span>
                  <span class="chat-time">${history.length > 0 ? history[history.length - 1].time : ''}</span>
                </div>
                <div class="user-status-text ${statusClass}">
                  <span class="status-dot"></span> ${statusText}
                </div>
                <div class="chat-bottom-row">
                  <p class="chat-last-msg">${lastMsg}</p>
                  ${unreadBadgeHtml}
                </div>
              </div>
            </div>
          `;
        }
      });
    }

    function openChat(userObj, isSys = false) {
      activeChatUser = userObj;
      isSystemChat = isSys;
      chatSearchQuery = ''; pendingReply = null; editingId = null;
      const sb = document.getElementById('chat-search-bar'); if (sb) sb.style.display = 'none';
      if (window.syncComposer) syncComposer();

      document.getElementById('active-chat-name').innerHTML = esc(userObj.name) + vb(userObj.username);
      document.getElementById('active-chat-avatar').src = userObj.avatar;

      const statusElem = document.getElementById('active-chat-status');
      const statusTextElem = document.getElementById('active-chat-status-text');

      if (isSys) {
        statusElem.className = 'user-status-text status-online';
        statusTextElem.innerText = 'Online';
      } else {
        registeredUsers = getStoredData('users', []);
        const freshUser = registeredUsers.find(u => u.username === userObj.username);
        const isOnline = freshUser ? freshUser.isOnline : false;

        statusElem.className = `user-status-text ${isOnline ? 'status-online' : 'status-offline'}`;
        statusTextElem.innerText = isOnline ? 'Online' : 'Offline';
      }

      applyWallpaperToChatArea();
      renderMessages();

      // Tandai pesan sudah dibaca saat chat dibuka
      if (!isSys && userObj.username) {
        markMessagesAsRead(userObj.username);
      }

      showScreen('chat-room-screen');
    }

    // ---- lanjutan dari file lama ----
    const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const nowTime = () => { const d = new Date(); return d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0'); };
    const sysKey = u => 'SYSTEM_' + u;

    function markMessagesAsRead(friendUsername) {
      chatsDb = getStoredData('chatsDb', {});
      const chatId = getChatRoomId(currentUser.username, friendUsername);
      let changed = false;
      (chatsDb[chatId] || []).forEach(m => {
        if (m.sender !== currentUser.username && !m.read) { m.read = true; changed = true; }
      });
      if (changed) { setStoredData('chatsDb', chatsDb); renderMessages(); }
    }

    function getBlocks() { return getStoredData('blocksDb', {}); }

    function currentChatId() {
      return isSystemChat ? sysKey(currentUser.username) : getChatRoomId(currentUser.username, activeChatUser.username);
    }

    const trx = (en, idn) => currentLang === 'id' ? idn : en;
    const vb = u => { const x = getStoredData('users', []).find(y => y.username === u); return (x && x.verified ? ' <i class="fa-solid fa-circle-check vbadge"></i>' : '') + (window.lbHtml ? window.lbHtml(u) : ''); };
    const fmtSize = n => n > 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB';
    const okSrc = u => /^(https:\/\/|data:image\/)/.test(u || '') ? u : '';
    let pendingReply = null, editingId = null, chatSearchQuery = '';

    function previewOf(m) {
      if (m.deleted) return trx('Message deleted', 'Pesan dihapus');
      if (m.audio) return '🎤 Voice note';
      if (m.media) return m.media.type === 'image' ? '📷 ' + (m.text || trx('Photo', 'Foto')) : m.media.type === 'video' ? '🎥 ' + (m.text || 'Video') : '📄 ' + (m.media.name || trx('Document', 'Dokumen'));
      return m.text || '';
    }

    function msgHTML(m, q) {
      const me = currentUser.username, mine = m.sender === me;
      const eq = q ? esc(q).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';
      const hl = s => eq ? s.replace(new RegExp('(' + eq + ')', 'ig'), '<mark>$1</mark>') : s;
      let body = '';
      if (m.deleted) {
        body = `<span class="msg-deleted"><i class="fa-solid fa-ban"></i> ${trx('This message was deleted', 'Pesan ini telah dihapus')}</span>`;
      } else {
        if (m.replyTo) body += `<div class="msg-quote" data-goto="${esc(m.replyTo.id || '')}"><b>${esc(m.replyTo.sender === me ? trx('You', 'Kamu') : m.replyTo.sender)}</b><span>${esc(m.replyTo.text || '')}</span></div>`;
        const md = m.media, url = md && okSrc(md.url) ? md.url : '';
        if (md && url) {
          if (md.type === 'image') body += `<img class="msg-img" src="${esc(url)}" loading="lazy">`;
          else if (md.type === 'video') body += `<video class="msg-video" controls preload="metadata" playsinline src="${esc(url)}"></video>`;
          else body += `<a class="msg-file" href="${esc(url)}" target="_blank" rel="noopener"><i class="fa-solid fa-file"></i><span><b>${esc(md.name || 'file')}</b><small>${fmtSize(md.size || 0)}</small></span><i class="fa-solid fa-download"></i></a>`;
        }
        if (m.audio && /^data:audio\//.test(m.audio)) body += `<audio controls preload="metadata" src="${esc(m.audio)}"></audio>`;
        if (m.text) body += `<div class="msg-text">${hl(esc(m.text).replace(/\n/g, '<br>'))}</div>`;
      }
      const groups = {};
      Object.entries(m.reactions || {}).forEach(([u, e]) => { (groups[e] = groups[e] || []).push(u); });
      const rx = Object.keys(groups).length ? `<div class="msg-rx">${Object.entries(groups).map(([e, us]) => `<span class="${us.includes(me) ? 'me' : ''}">${esc(e)}${us.length > 1 ? ' ' + us.length : ''}</span>`).join('')}</div>` : '';
      const tick = mine && !m.deleted ? `<span class="wa-tick ${m.read ? 'read' : 'delivered'}"><i class="fa-solid fa-check-double"></i></span>` : '';
      const pin = m.pinned && !m.deleted ? '<i class="fa-solid fa-thumbtack msg-pin"></i>' : '';
      return `<div class="message-row ${mine ? 'row-right' : 'row-left'}" data-id="${esc(m.id || '')}">
          <div class="message-bubble ${mine ? 'message-right' : 'message-left'}">${body}</div>${rx}
          <div class="msg-meta-outer">${pin}<span>${m.edited && !m.deleted ? trx('edited', 'diedit') + ' · ' : ''}${esc(m.time || '')}</span>${tick}</div></div>`;
    }

    function updatePinBanner(history) {
      const b = document.getElementById('pin-banner'); if (!b) return;
      const pins = history.filter(m => m.pinned && !m.deleted), p = pins[pins.length - 1];
      if (!p || chatSearchQuery) { b.style.display = 'none'; return; }
      b.style.display = 'flex'; b.dataset.id = p.id || '';
      document.getElementById('pin-text').textContent = previewOf(p);
    }

    function renderMessages() {
      if (!activeChatUser || !currentUser) return;
      chatsDb = getStoredData('chatsDb', {});
      const area = document.getElementById('chat-messages-area');
      let history = chatsDb[currentChatId()] || [];
      if (isSystemChat && history.length === 0) {
        history = [{ sender: 'system', text: 'Welcome to OrVexa! Check new updates here.', time: nowTime(), read: true }];
      }
      // User/admin tidak boleh kirim pesan ke System
      document.getElementById('chat-input-container').style.display = isSystemChat ? 'none' : 'flex';

      const q = chatSearchQuery.trim().toLowerCase();
      const list = q ? history.filter(m => !m.deleted && (m.text || '').toLowerCase().includes(q)) : history;
      const rid = currentChatId();
      const stick = area.dataset.room !== rid || window.__forceScroll || area.scrollHeight - area.scrollTop - area.clientHeight < 160;
      area.innerHTML = list.map(m => msgHTML(m, q)).join('') || (q ? `<div class="chat-empty">${trx('No messages found', 'Tidak ada pesan ditemukan')}</div>` : '');
      if (!q && stick) area.scrollTop = area.scrollHeight;
      area.dataset.room = rid;
      updatePinBanner(history);
    }

    // kirim pesan (teks, media, suara, balasan). target opsional untuk membalas story.
    function sendRich(extra, target) {
      const tu = target || activeChatUser;
      if ((!target && isSystemChat) || !tu || !tu.username) return false;
      const blocks = getBlocks();
      if ((blocks[currentUser.username] || []).includes(tu.username)) {
        alert(currentLang === 'id' ? 'Kamu memblokir pengguna ini.' : 'You blocked this user.'); return false;
      }
      if ((blocks[tu.username] || []).includes(currentUser.username)) {
        alert(currentLang === 'id' ? 'Pesan tidak dapat dikirim.' : 'Message cannot be sent.'); return false;
      }
      chatsDb = getStoredData('chatsDb', {});
      const id = getChatRoomId(currentUser.username, tu.username);
      if (!chatsDb[id]) chatsDb[id] = [];
      const msg = { sender: currentUser.username, text: '', time: nowTime(), read: false, ...extra };
      if (!target && pendingReply && !msg.replyTo) msg.replyTo = pendingReply;
      chatsDb[id].push(msg);
      setStoredData('chatsDb', chatsDb);

      // pastikan kedua pihak saling punya chat di daftar
      friendsDb = getStoredData('friendsDb', {});
      if (!friendsDb[tu.username]) friendsDb[tu.username] = [];
      if (!friendsDb[tu.username].includes(currentUser.username)) {
        friendsDb[tu.username].push(currentUser.username);
        setStoredData('friendsDb', friendsDb);
      }
      if (!target) {
        pendingReply = null; window.__forceScroll = true; renderMessages(); window.__forceScroll = false;
        if (window.syncComposer) syncComposer();
      }
      return true;
    }

    function applyEdit(text) {
      chatsDb = getStoredData('chatsDb', {});
      const m = (chatsDb[currentChatId()] || []).find(x => x.id === editingId);
      if (m && m.sender === currentUser.username && !m.deleted && m.text !== text) {
        m.text = text; m.edited = true; setStoredData('chatsDb', chatsDb);
      }
      editingId = null;
      const input = document.getElementById('chat-input'); input.value = ''; autoResizeTextarea(input);
      if (window.syncComposer) syncComposer();
      renderMessages();
    }

    function sendMessage() {
      if (isSystemChat || !activeChatUser || !activeChatUser.username) return;
      const input = document.getElementById('chat-input');
      const text = input.value.trim();
      if (!text) return;
      if (editingId) { applyEdit(text); return; }
      if (sendRich({ text })) { input.value = ''; autoResizeTextarea(input); }
    }

    document.addEventListener('keydown', e => {
      if (e.target && e.target.id === 'chat-input' && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });

    // SIDEBAR
    function openSidebar() {
      if (!activeChatUser) return;
      document.getElementById('chat-sidebar').classList.add('active');
    }
    function closeSidebar(e) { if (e.target.id === 'chat-sidebar') closeSidebarDirect(); }
    function closeSidebarDirect() { document.getElementById('chat-sidebar').classList.remove('active'); }

    function clearChat() {
      if (!confirm(currentLang === 'id' ? 'Bersihkan semua pesan di chat ini?' : 'Clear all messages in this chat?')) return;
      chatsDb = getStoredData('chatsDb', {});
      chatsDb[currentChatId()] = [];
      setStoredData('chatsDb', chatsDb);
      renderMessages(); closeSidebarDirect();
    }

    function blockUser() {
      if (isSystemChat || !activeChatUser.username) return;
      if (!confirm(currentLang === 'id' ? 'Blokir pengguna ini?' : 'Block this user?')) return;
      const blocks = getBlocks();
      if (!blocks[currentUser.username]) blocks[currentUser.username] = [];
      if (!blocks[currentUser.username].includes(activeChatUser.username)) blocks[currentUser.username].push(activeChatUser.username);
      setStoredData('blocksDb', blocks);
      closeSidebarDirect(); switchTab('chats');
    }

    // WALLPAPER
    function applyWallpaperToChatArea() {
      wallpapersDb = getStoredData('wallpapersDb', {});
      const area = document.getElementById('chat-messages-area');
      const wp = wallpapersDb[currentChatId()] || wallpapersDb.global;
      area.style.backgroundImage = wp ? `url(${wp})` : 'none';
    }
    function triggerChatWallpaperChange() { document.getElementById('chat-wp-file-input').click(); }
    function triggerGlobalWallpaperChange() { document.getElementById('global-wp-file-input').click(); }
    function readImage(e, cb) {
      const f = e.target.files[0]; if (!f) return;
      const r = new FileReader(); r.onload = ev => cb(ev.target.result); r.readAsDataURL(f); e.target.value = '';
    }
    function uploadChatWallpaper(e) {
      readImage(e, data => {
        wallpapersDb = getStoredData('wallpapersDb', {});
        wallpapersDb[currentChatId()] = data; setStoredData('wallpapersDb', wallpapersDb);
        applyWallpaperToChatArea(); closeSidebarDirect();
      });
    }
    function uploadGlobalWallpaper(e) {
      readImage(e, data => {
        wallpapersDb = getStoredData('wallpapersDb', {});
        wallpapersDb.global = data; setStoredData('wallpapersDb', wallpapersDb);
      });
    }
    function resetChatWallpaper() {
      wallpapersDb = getStoredData('wallpapersDb', {});
      delete wallpapersDb[currentChatId()]; setStoredData('wallpapersDb', wallpapersDb);
      applyWallpaperToChatArea(); closeSidebarDirect();
    }
    function resetGlobalWallpaper() {
      wallpapersDb = getStoredData('wallpapersDb', {});
      delete wallpapersDb.global; setStoredData('wallpapersDb', wallpapersDb);
    }

/* ===== blok JS 3 ===== */
(function () {
  const DEV = 'risky.err';
  const isDev = () => !!currentUser && currentUser.username === DEV;
  let tab = 'dashboard';
  const MENU = [
    ['dashboard','Dashboard'],['users','Users'],['verification','Verification'],['content','Content'],
    ['messages','Messages'],['notifications','Notifications'],['analytics','Analytics'],['security','Security'],
    ['admins','Admin Management'],['system','System'],['asettings','Admin Settings'],['reports','Reports'],['updatelog','Update Log'],['app','App'],['suggestions','Suggestions'],['complaints','Complaints'],['labels','Labels'],['groups','Groups']
  ];
  const $ = id => document.getElementById(id);
  const users = () => getStoredData('users', []);
  const saveUsers = u => setStoredData('users', u);

  // --- hook tanpa mengubah logic lama ---
  const _rst = renderSettingsTab;
  renderSettingsTab = function () { _rst(); $('dev-settings-group').style.display = isDev() ? 'block' : 'none'; };

  const _ss = showScreen;
  showScreen = function (id) { _ss(id); if (id === 'admin-screen') $('main-bottom-nav').style.display = 'none'; };

  const _si = handleSignIn;
  handleSignIn = function (e) {
    const i = $('signin-username').value.trim().toLowerCase(), p = $('signin-pass').value;
    const u = users().find(x => (x.username === i || x.email === i) && x.password === p);
    _si(e);
  };

  window.openAdminPanel = function () {
    if (!isDev()) return;
    showScreen('admin-screen'); render();
  };

  window.admTab = function (t) { tab = t; render(); };
  window.admRender = render;
  window.admAct = function (fn, ...a) { if (!isDev()) return; ACT[fn](...a); render(); };

  // konfirmasi hapus di dalam aplikasi (confirm() bawaan browser sering diblokir di WebView/PWA sehingga tombol Delete terlihat "mati")
  function askDel(msg, yes, label) {
    let o = $('adm-confirm');
    if (!o) {
      o = document.createElement('div'); o.id = 'adm-confirm'; o.className = 'modal-overlay'; o.style.zIndex = 1200;
      o.innerHTML = '<div class="modal-card"><h3 class="modal-title" id="adm-confirm-t"></h3><p class="rp-sub" style="margin:6px 0 4px">This cannot be undone.</p><div class="mp-btns"><button type="button" class="btn-secondary" id="adm-confirm-n">Cancel</button><button type="button" class="btn-primary" id="adm-confirm-y" style="background:#ef4444">Delete</button></div></div>';
      document.body.appendChild(o);
    }
    $('adm-confirm-t').textContent = msg; $('adm-confirm-y').textContent = label || 'Delete';
    $('adm-confirm-n').onclick = () => o.classList.remove('active');
    $('adm-confirm-y').onclick = () => { o.classList.remove('active'); yes(); window.admDetailClose(); };
    o.classList.add('active');
  }
  // detail lengkap saran / laporan bug
  let cur = null;
  window.admDetailClose = () => { const m = $('adm-detail'); if (m) m.classList.remove('active'); cur = null; };
  window.admOpen = function (col, id) {
    if (!isDev()) return;
    const x = getStoredData(col + 'Db', []).find(y => y.id === id); if (!x) return;
    cur = { col, id }; const sug = col === 'suggestions', fin = sug ? x.status !== 'new' : x.status !== 'open';
    $('adm-d-ico').className = 'fa-solid ' + (sug ? 'fa-lightbulb' : 'fa-bug');
    $('adm-d-title').textContent = sug ? 'Suggestion' : 'Report' + (x.type ? ': ' + x.type : '');
    $('adm-d-sub').textContent = '@' + x.from + ' · ' + new Date(x.ts).toLocaleString() + ' · ' + x.status;
    $('adm-d-text').textContent = x.text || '';
    const meta = []; if (x.screen) meta.push('Screen: ' + x.screen); if (x.lang) meta.push('Language: ' + x.lang); if (x.ua) meta.push('Device: ' + x.ua);
    $('adm-d-meta').textContent = meta.join('\n'); $('adm-d-meta').style.display = meta.length ? 'block' : 'none';
    $('adm-d-done').style.display = fin ? 'none' : ''; $('adm-d-done').textContent = sug ? 'Done' : 'Resolve';
    $('adm-detail').classList.add('active');
  };
  window.admDetailAct = function (op) {
    if (!cur) return; const { col, id } = cur;
    if (op === 'done') { window.admDetailClose(); window.admAct('ticketDone', col, id); } else window.admAct('ticketDel', col, id);
  };

  const ACT = {
    updPost() {
      const t = $('adm-upd-title').value.trim(), b = $('adm-upd-body').value.trim();
      if (!t || !b) return alert('Title and message are required');
      window.orvexaUpdateAdd({ title: t.slice(0, 80), body: b.slice(0, 1000), ts: Date.now(), author: currentUser.username }).then(ok => {
        if (!ok) return; const a = $('adm-upd-title'), c = $('adm-upd-body'); if (a) a.value = ''; if (c) c.value = '';
      });
    },
    updDel(id) { askDel('Delete this update?', () => window.orvexaUpdateDel(id)); },
    sugToggle() { const c = getStoredData('configDb', {}), open = !(c.suggestions && c.suggestions.open === false); window.orvexaSuggestOpen(!open); },
    appVer() {
      const v = window.oapp.cleanVer($('adm-app-version').value); if (!v) return alert('Version is not valid. Example: 2.5.0');
      window.orvexaConfigSet('app', { ...window.oapp.appRaw(), version: v }, 'Version saved: v' + v);
    },
    appLinks() {
      const ch = $('adm-app-channel').value.trim(), tk = $('adm-app-tiktok').value.trim();
      const c = ch ? window.oapp.cleanChannel(ch) : '', t = tk ? window.oapp.cleanTiktok(tk) : '';
      if (ch && !c) return alert('Channel link must look like https://whatsapp.com/channel/XXXX');
      if (tk && !t) return alert('TikTok link or username is not valid');
      window.orvexaConfigSet('app', { ...window.oapp.appRaw(), channel: c, tiktok: t }, 'Links saved');
    },
    mtSave() { saveMt(window.oapp.maint().on); },
    mtToggle() {
      const next = !window.oapp.maint().on;
      if (!next) return saveMt(false);
      if (!mtBlocks().length) return alert('Select at least one feature to block.');
      askDel('Turn ON maintenance? Users can still sign in, but the selected actions will be blocked.', () => saveMt(true), 'Turn ON');
    },
    lbSave() {
      const t = $('adm-lb-text').value.trim().slice(0, 14); if (!t) return alert('Label text is required');
      const l = { id: lbEditId || 'l' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), text: t, color: $('adm-lb-color').value, style: $('adm-lb-style').value, icon: $('adm-lb-icon').value };
      const d = lbData(), i = d.list.findIndex(x => x.id === l.id); if (i >= 0) d.list[i] = l; else d.list.push(l);
      window.orvexaLabelsSave(d).then(ok => { if (ok) window.admLbReset(); });
    },
    lbEdit(id) {
      const l = window.lb.defs().find(x => x.id === id); if (!l) return; lbEditId = id;
      $('adm-lb-text').value = l.text; $('adm-lb-color').value = l.color; $('adm-lb-style').value = l.style; $('adm-lb-icon').value = l.icon;
      $('adm-lb-ttl').textContent = 'Edit label'; window.admLbPrev(); $('adm-lb-text').scrollIntoView({ block: 'center', behavior: 'smooth' });
    },
    lbDel(id) {
      askDel(id === 'dev' ? 'Reset the DEV label to default?' : 'Delete this label?', () => {
        const d = lbData(); d.list = d.list.filter(x => x.id !== id);
        if (id !== 'dev') { d.assign.forEach(a => { a.l = (a.l || []).filter(x => x !== id); }); d.assign = d.assign.filter(a => (a.l || []).length || a.u === 'risky.err'); }
        window.orvexaLabelsSave(d);
      }, id === 'dev' ? 'Reset' : 'Delete');
    },
    lbPick(u) {
      let o = $('adm-lb-pick');
      if (!o) {
        o = document.createElement('div'); o.id = 'adm-lb-pick'; o.className = 'modal-overlay'; o.style.zIndex = 1100;
        o.innerHTML = '<div class="modal-card"><h3 class="modal-title">Labels</h3><p class="rp-sub" id="adm-lb-pick-u"></p><div class="lb-chips" id="adm-lb-chips"></div><div class="mp-btns"><button type="button" class="btn-secondary" id="adm-lb-pick-n">Cancel</button><button type="button" class="btn-primary" id="adm-lb-pick-y">Save</button></div></div>';
        document.body.appendChild(o);
        $('adm-lb-chips').addEventListener('click', e => { const c = e.target.closest('.lb-chip'); if (c) c.classList.toggle('on'); });
      }
      const cur = window.lb.assigned(u);
      $('adm-lb-pick-u').textContent = '@' + u + ' — tap to toggle';
      $('adm-lb-chips').innerHTML = window.lb.defs().map(l => '<button type="button" class="lb-chip' + (cur.includes(l.id) ? ' on' : '') + '" data-id="' + esc(l.id) + '">' + window.lb.pill(l) + '</button>').join('');
      $('adm-lb-pick-n').onclick = () => o.classList.remove('active');
      $('adm-lb-pick-y').onclick = () => {
        const ids = [...document.querySelectorAll('#adm-lb-chips .lb-chip.on')].map(c => c.dataset.id), d = lbData();
        d.assign = d.assign.filter(a => a.u !== u); if (ids.length || u === 'risky.err') d.assign.push({ u, l: ids });
        o.classList.remove('active'); window.orvexaLabelsSave(d);
      };
      o.classList.add('active');
    },
    ticketDone(col, id) { window.orvexaTicketOp(col, 'done', id); },
    ticketDel(col, id) { askDel('Delete this item?', () => window.orvexaTicketOp(col, 'del', id)); },
    reportDone(id) { window.orvexaReportOp('done', id); },
    reportDel(id) { askDel('Delete this report?', () => window.orvexaReportOp('del', id)); },
    ban(u) {
      const l = users(), x = l.find(y => y.username === u); if (!x || u === DEV) return;
      if (x.banned) { x.banned = false; x.banReason = ''; x.banAt = 0; x.banUntil = 0; x.banNote = ''; saveUsers(l); }
      else window.openBanModal(u);
    },
    del(u) {
      if (u === DEV || !confirm('Delete @' + u + '?')) return;
      saveUsers(users().filter(y => y.username !== u));
      const s = getStoredData('storiesDb', {}); delete s[u]; setStoredData('storiesDb', s);
      const f = getStoredData('friendsDb', {}); delete f[u];
      Object.keys(f).forEach(k => f[k] = f[k].filter(x => x !== u)); setStoredData('friendsDb', f);
    },
    verify(u) { const l = users(), x = l.find(y => y.username === u); if (x) { x.verified = !x.verified; saveUsers(l); } },
    role(u) { const l = users(), x = l.find(y => y.username === u); if (x && u !== DEV) { x.role = x.role === 'admin' ? 'user' : 'admin'; saveUsers(l); } },
    delStory(u) { const s = getStoredData('storiesDb', {}); delete s[u]; setStoredData('storiesDb', s); },
    delChat(id) { if (!confirm('Delete this chat?')) return; const c = getStoredData('chatsDb', {}); delete c[id]; setStoredData('chatsDb', c); },
    clearAllChats() { if (confirm('Delete ALL chats?')) setStoredData('chatsDb', {}); },
    clearStories() { if (confirm('Delete ALL stories?')) setStoredData('storiesDb', {}); },
    resetOnline() { const l = users(); l.forEach(u => u.isOnline = false); saveUsers(l); },
    wipe() {
      if (!confirm('Wipe ALL OrVexa data? This cannot be undone.')) return;
      Object.keys(localStorage).filter(k => k.startsWith('orvexa_')).forEach(k => localStorage.removeItem(k));
      location.reload();
    },
    exportData() {
      const o = {}; Object.keys(localStorage).filter(k => k.startsWith('orvexa_')).forEach(k => o[k] = localStorage.getItem(k));
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(o)], { type: 'application/json' }));
      a.download = 'orvexa-backup.json'; a.click();
    },
    unblock(by, who) { const b = getStoredData('blocksDb', {}); b[by] = (b[by] || []).filter(x => x !== who); setStoredData('blocksDb', b); },
    send() {
      const text = $('adm-notif-text').value.trim(), to = $('adm-notif-to').value.trim().toLowerCase();
      if (!text) return;
      const l = users(), targets = to ? l.filter(u => u.username === to) : l;
      if (!targets.length) { alert('User not found'); return; }
      const c = getStoredData('chatsDb', {});
      targets.forEach(u => {
        const k = sysKey(u.username); if (!c[k]) c[k] = [];
        c[k].push({ sender: 'system', text: text, time: nowTime(), read: false });
      });
      setStoredData('chatsDb', c);
      const log = getStoredData('adminNotifs', []);
      log.unshift({ to: to || 'ALL', text: text, time: new Date().toLocaleString(), count: targets.length });
      setStoredData('adminNotifs', log.slice(0, 30));
      alert('Sent to ' + targets.length + ' user(s)');
    },
    saveName() { const v = $('adm-app-ver').value.trim(); if (v) setStoredData('adminVersionNote', v); }
  };

  const row = (img, title, sub, btns) => `<div class="adm-row"><div class="adm-left">${img ? `<img src="${img}">` : ''}<div>${title}<br><span class="adm-muted">${sub}</span></div></div><div class="adm-btns">${btns}</div></div>`;
  const tk = (col, x, head, text, btns) => `<div class="adm-row adm-tk"><div class="adm-left adm-tap" onclick="admOpen('${col}','${esc(x.id)}')"><div>${head}<br><span class="adm-muted adm-clamp">${text}</span><span class="adm-more">Read more</span></div></div><div class="adm-btns">${btns}</div></div>`;
  const btn = (label, js, cls = '') => `<button class="adm-btn ${cls}" onclick="${js}">${label}</button>`;
  const vb = u => u.verified ? '<i class="fa-solid fa-circle-check vbadge"></i>' : '';
  const stat = (n, l) => `<div class="adm-stat"><b>${n}</b><span>${l}</span></div>`;

  const VIEW = {
    dashboard() {
      const u = users(), s = getStoredData('storiesDb', {}), c = getStoredData('chatsDb', {});
      const msgs = Object.values(c).reduce((a, h) => a + h.length, 0);
      return `<div class="adm-grid">${stat(u.length, 'Total Users')}${stat(u.filter(x => x.isOnline).length, 'Online')}${stat(Object.keys(s).length, 'Active Stories')}${stat(msgs, 'Messages')}${stat(u.filter(x => x.verified).length, 'Verified')}${stat(u.filter(x => x.banned).length, 'Banned')}</div>`;
    },
    users() {
      return users().map(u => row(u.avatar, esc(u.name) + vb(u) + window.lb.html(u.username) + (u.isOnline ? ' 🟢' : ''), '@' + esc(u.username) + ' · ' + esc(u.email) + (u.banned ? ' · BANNED: ' + esc(u.banReason || '-') + (u.banUntil ? ' until ' + new Date(u.banUntil).toLocaleString() : ' (permanent)') : ''),
        u.username === DEV ? '<span class="adm-muted">DEV</span>' :
        btn(u.banned ? 'Unban' : 'Ban', `admAct('ban','${u.username}')`, u.banned ? 'gray' : 'red') + btn('Delete', `admAct('del','${u.username}')`, 'red'))).join('') || '<p class="adm-muted">No users.</p>';
    },
    verification() {
      return users().map(u => row(u.avatar, esc(u.name) + vb(u), '@' + esc(u.username),
        btn(u.verified ? 'Revoke' : 'Verify', `admAct('verify','${u.username}')`, u.verified ? 'gray' : ''))).join('');
    },
    content() {
      const s = getStoredData('storiesDb', {}), k = Object.keys(s);
      return `<div class="adm-btns">${btn('Delete All Stories', "admAct('clearStories')", 'red')}</div>` +
        (k.map(u => row(s[u].img, '@' + esc(u), esc(s[u].caption || '(no caption)') + ' · ' + s[u].time, btn('Delete', `admAct('delStory','${u}')`, 'red'))).join('') || '<p class="adm-muted">No active stories.</p>');
    },
    messages() {
      const c = getStoredData('chatsDb', {}), k = Object.keys(c);
      return `<div class="adm-btns">${btn('Delete All Chats', "admAct('clearAllChats')", 'red')}</div>` +
        (k.map(id => row('', esc(id.replace('_vs_', ' ↔ ')), c[id].length + ' messages', btn('Delete', `admAct('delChat','${id}')`, 'red'))).join('') || '<p class="adm-muted">No chats.</p>');
    },
    notifications() {
      const log = getStoredData('adminNotifs', []);
      return `<div class="adm-card"><b>Send as Chat System</b>
        <input type="text" id="adm-notif-to" placeholder="Username (empty = all users)" style="margin-top:8px">
        <textarea id="adm-notif-text" placeholder="Notification message..."></textarea>
        ${btn('Send', "admAct('send')")}</div>` +
        log.map(l => `<div class="adm-card"><span class="adm-muted">${esc(l.time)} → ${esc(l.to)} (${l.count})</span><br>${esc(l.text)}</div>`).join('');
    },
    analytics() {
      const u = users(), c = getStoredData('chatsDb', {}), f = getStoredData('friendsDb', {});
      const msgs = Object.values(c).reduce((a, h) => a + h.length, 0);
      const top = Object.entries(f).sort((a, b) => b[1].length - a[1].length)[0];
      return `<div class="adm-grid">${stat(Object.keys(c).length, 'Chat Rooms')}${stat(u.length ? (msgs / u.length).toFixed(1) : 0, 'Msgs / User')}${stat(Object.values(f).reduce((a, x) => a + x.length, 0), 'Friend Links')}${stat(top ? '@' + esc(top[0]) : '-', 'Most Contacts')}</div>`;
    },
    security() {
      const b = getStoredData('blocksDb', {}), ban = users().filter(u => u.banned);
      const bl = Object.entries(b).flatMap(([by, l]) => l.map(w => row('', '@' + esc(by) + ' blocked @' + esc(w), '', btn('Unblock', `admAct('unblock','${by}','${w}')`, 'gray'))));
      return `<b>Banned Accounts</b>` + (ban.map(u => row(u.avatar, esc(u.name), '@' + esc(u.username), btn('Unban', `admAct('ban','${u.username}')`, 'gray'))).join('') || '<p class="adm-muted">None.</p>') +
        `<b>User Blocks</b>` + (bl.join('') || '<p class="adm-muted">None.</p>');
    },
    admins() {
      return users().map(u => row(u.avatar, esc(u.name), '@' + esc(u.username) + ' · ' + (u.username === DEV ? 'DEVELOPER' : (u.role || 'user').toUpperCase()),
        u.username === DEV ? '' : btn(u.role === 'admin' ? 'Demote' : 'Make Admin', `admAct('role','${u.username}')`, u.role === 'admin' ? 'gray' : ''))).join('');
    },
    system() {
      return `<div class="adm-card"><b>System</b><p class="adm-muted" style="margin:6px 0 10px">Storage: ${(JSON.stringify(localStorage).length / 1024).toFixed(1)} KB</p>
        <div class="adm-btns" style="flex-wrap:wrap">${btn('Export Backup', "admAct('exportData')")}${btn('Reset Online Status', "admAct('resetOnline')", 'gray')}${btn('Wipe All Data', "admAct('wipe')", 'red')}</div></div>`;
    },
    asettings() {
      return `<div class="adm-card"><b>Admin Settings</b><p class="adm-muted" style="margin:6px 0">Logged in as @${esc(currentUser.username)} (Developer)</p>
        <input type="text" id="adm-app-ver" placeholder="Admin note / version label" value="${esc(getStoredData('adminVersionNote', ''))}">
        <div style="margin-top:10px">${btn('Save', "admAct('saveName')")}</div></div>`;
    },
    reports() {
      const r = getStoredData('reports', []);
      const cnt = {}; r.forEach(x => { if (x.status === 'open') cnt[x.target] = (cnt[x.target] || 0) + 1; });
      return r.map(x => row('', '@' + esc(x.target) + (String(x.reason).startsWith('AUTO') ? ' <span class="adm-muted">← SYSTEM (auto-detected)</span>' : ' <span class="adm-muted">← @' + esc(x.reporter) + '</span>') + (x.status === 'open' && cnt[x.target] > 1 ? ' <span class="adm-muted">· ' + cnt[x.target] + ' open reports</span>' : ''),
        esc(x.reason) + (x.note ? ' — ' + esc(x.note) : '') + ' · ' + new Date(x.ts).toLocaleString() + ' · ' + esc(x.status),
        (x.status === 'open' ? btn('Resolve', `admAct('reportDone','${x.id}')`, 'gray') : '') + btn('Ban', `admAct('ban','${esc(x.target)}')`, 'red') + btn('Delete', `admAct('reportDel','${x.id}')`, 'red'))).join('') || '<p class="adm-muted">No reports.</p>';
    },
    updatelog() {
      return `<div class="adm-card"><b>New Update</b>
        <input type="text" id="adm-upd-title" placeholder="Title (e.g. v2.5.0)" maxlength="80" style="margin-top:8px">
        <textarea id="adm-upd-body" placeholder="What's new..." maxlength="1000"></textarea>
        ${btn('Publish', "admAct('updPost')")}</div><div id="adm-upd-list" style="display:flex;flex-direction:column;gap:12px">${updList()}</div>`;
    },
    suggestions() {
      const c = getStoredData('configDb', {}), open = !(c.suggestions && c.suggestions.open === false), a = getStoredData('suggestionsDb', []);
      return `<div class="adm-card"><b>Suggestion Box: ${open ? 'OPEN' : 'CLOSED'}</b><p class="adm-muted" style="margin:6px 0 10px">Users can send feature ideas only while the box is open.</p>${btn(open ? 'Close box' : 'Open box', "admAct('sugToggle')", open ? 'red' : '')}</div>` +
        (a.map(x => tk('suggestions', x, '@' + esc(x.from) + ' <span class="adm-muted">· ' + new Date(x.ts).toLocaleString() + ' · ' + esc(x.status) + '</span>', esc(x.text),
          (x.status === 'new' ? btn('Done', `admAct('ticketDone','suggestions','${esc(x.id)}')`, 'gray') : '') + btn('Delete', `admAct('ticketDel','suggestions','${esc(x.id)}')`, 'red'))).join('') || '<p class="adm-muted">No suggestions yet.</p>');
    },
    complaints() {
      const a = getStoredData('complaintsDb', []);
      return a.map(x => tk('complaints', x, '@' + esc(x.from) + ' <span class="adm-muted">[' + esc(x.type) + '] · ' + new Date(x.ts).toLocaleString() + ' · ' + esc(x.status) + '</span>', esc(x.text),
        (x.status === 'open' ? btn('Resolve', `admAct('ticketDone','complaints','${esc(x.id)}')`, 'gray') : '') + btn('Delete', `admAct('ticketDel','complaints','${esc(x.id)}')`, 'red'))).join('') || '<p class="adm-muted">No complaints.</p>';
    },
    app() {
      const a = window.oapp.app(), m = window.oapp.maint();
      return `<div id="adm-app-status">${appStatus()}</div>
        <div class="adm-card"><b>OrVexa version</b>
          <p class="adm-muted" style="margin:6px 0 8px">Shown in Profile → About. Example: 2.5.0</p>
          <input type="text" id="adm-app-version" maxlength="16" placeholder="2.4.0" value="${esc(window.oapp.ver())}">
          <div style="margin-top:10px">${btn('Save version', "admAct('appVer')")}</div></div>
        <div class="adm-card"><b>Official links</b>
          <p class="adm-muted" style="margin:6px 0 8px">Shown near the Update log (bell icon). Leave a field empty to hide it.</p>
          <input type="text" id="adm-app-channel" placeholder="WhatsApp Channel link: https://whatsapp.com/channel/…" value="${esc(a.channel)}">
          <input type="text" id="adm-app-tiktok" style="margin-top:8px" placeholder="TikTok link or @username" value="${esc(a.tiktok)}">
          <div style="margin-top:10px">${btn('Save links', "admAct('appLinks')")}</div></div>
        <div class="adm-card"><b>Maintenance settings</b>
          <p class="adm-muted" style="margin:6px 0 8px">While ON, everyone can still sign in and read, but the actions below are blocked. You (developer) are exempt.</p>
          <textarea id="adm-mt-msg" maxlength="200" placeholder="Message shown to users (optional)">${esc(m.message)}</textarea>
          <div class="mt-checks">${window.oapp.FEATURES.map(k => `<label class="mt-check"><input type="checkbox" id="adm-mt-${k}"${(m.block.length ? m.block.includes(k) : true) ? ' checked' : ''}><span>${MT_LABEL[k]}</span></label>`).join('')}</div>
          <div style="margin-top:12px">${btn('Save settings', "admAct('mtSave')", 'gray')}</div></div>`;
    },
    labels() {
      const ic = ['', ...window.lb.ICONS].map(i => `<option value="${i}"${i === 'code' ? ' selected' : ''}>${i ? i.replace(/-/g, ' ') : 'no icon'}</option>`).join('');
      return `<div class="adm-card"><b id="adm-lb-ttl">New label</b>
        <p class="adm-muted" style="margin:6px 0 0">Custom badges shown next to a user's name in profile, chat and user info. Edit DEV to restyle the built-in label.</p>
        <div class="lb-presets">${LB_PRESETS.map((p, i) => `<button type="button" class="lb-preset" onclick="admLbPreset(${i})">${p.text}</button>`).join('')}</div>
        <input type="text" id="adm-lb-text" placeholder="Label text (e.g. OWNER)" maxlength="14" oninput="admLbPrev()">
        <div class="lb-row"><label>Color</label><input type="color" id="adm-lb-color" value="#e5484d" oninput="admLbPrev()"><div class="lb-swatches">${LB_SW.map(c => `<button type="button" style="background:${c}" onclick="admLbColor('${c}')"></button>`).join('')}</div></div>
        <div class="lb-row"><label>Style</label><select id="adm-lb-style" onchange="admLbPrev()"><option value="solid">Solid glow</option><option value="soft">Soft</option><option value="outline">Outline</option></select><label>Icon</label><select id="adm-lb-icon" onchange="admLbPrev()">${ic}</select></div>
        <div class="lb-prev">Preview <span id="adm-lb-prev">${window.lb.pill({ text: 'LABEL', color: '#e5484d', style: 'solid', icon: 'code' })}</span></div>
        <div class="adm-btns" style="margin-top:12px">${btn('Save label', "admAct('lbSave')")}${btn('Clear', 'admLbReset()', 'gray')}</div></div>
        <div id="adm-lb-lists" style="display:flex;flex-direction:column;gap:12px">${lbLists()}</div>`;
    },
    groups() { return '<div class="adm-soon"><i class="fa-solid fa-user-group" style="font-size:3em;margin-bottom:12px"></i><p>Groups — Coming Soon</p></div>'; }
  };

  // ---- app: versi, link resmi, maintenance ----
  const MT_LABEL = { messages: 'Send messages (text, photos, voice)', stories: 'Create stories', contacts: 'Add contacts' };
  const mtBlocks = () => window.oapp.FEATURES.filter(k => $('adm-mt-' + k) && $('adm-mt-' + k).checked);
  function saveMt(on) {
    const cur = window.oapp.maint(), block = $('adm-mt-messages') ? mtBlocks() : cur.block;
    const d = { on, message: $('adm-mt-msg') ? $('adm-mt-msg').value.trim().slice(0, 200) : cur.message, block, since: on ? (cur.on && cur.since ? cur.since : Date.now()) : 0, by: currentUser.username };
    window.orvexaConfigSet('maintenance', d, on ? 'Maintenance is ON' : 'Maintenance is OFF');
  }
  function appStatus() {
    const m = window.oapp.maint();
    return `<div class="adm-card"><b>Server status</b><br><span class="mt-state ${m.on ? 'on' : 'off'}"><span class="dot"></span>${m.on ? 'MAINTENANCE' : 'ONLINE'}</span>
      <p class="adm-muted" style="margin:10px 0 12px">${m.on ? 'Since ' + new Date(m.since).toLocaleString() + ' · blocked: ' + (m.block.join(', ') || 'nothing') : 'All features are available.'} · version v${esc(window.oapp.ver())}</p>
      ${btn(m.on ? 'Turn OFF maintenance' : 'Turn ON maintenance', "admAct('mtToggle')", m.on ? '' : 'red')}</div>`;
  }
  // ---- label kustom ----
  let lbEditId = null;
  const LB_PRESETS = [{ text: 'DEV', color: '#e5484d', icon: 'code', style: 'solid' }, { text: 'OWNER', color: '#f5b301', icon: 'crown', style: 'solid' }, { text: 'ADMIN', color: '#3b82f6', icon: 'shield-halved', style: 'solid' }, { text: 'MOD', color: '#22c55e', icon: 'check', style: 'soft' }, { text: 'VIP', color: '#a855f7', icon: 'gem', style: 'solid' }];
  const LB_SW = ['#e5484d', '#f97316', '#f5b301', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899', '#64748b', '#111111'];
  const lbData = () => { const c = window.lb.cfg(); return { list: JSON.parse(JSON.stringify(c.list)), assign: JSON.parse(JSON.stringify(c.assign)) }; };
  function lbLists() {
    const d = window.lb.defs(), us = users(), stored = window.lb.cfg().list;
    const rl = d.map(l => {
      const def = l.id === 'dev', has = stored.some(x => x.id === l.id), n = us.filter(u => window.lb.assigned(u.username).includes(l.id)).length;
      return row('', window.lb.pill(l), n + ' user' + (n === 1 ? '' : 's') + (def ? ' · built-in' : ''),
        btn('Edit', `admAct('lbEdit','${esc(l.id)}')`, 'gray') + (def ? (has ? btn('Reset', "admAct('lbDel','dev')", 'gray') : '') : btn('Delete', `admAct('lbDel','${esc(l.id)}')`, 'red')));
    }).join('');
    const ru = us.map(u => row(u.avatar, esc(u.name) + vb(u) + window.lb.html(u.username), '@' + esc(u.username), btn('Labels', `admAct('lbPick','${esc(u.username)}')`))).join('');
    return '<div class="adm-sec">All labels</div>' + rl + '<div class="adm-sec" style="margin-top:6px">Assign to users</div>' + (ru || '<p class="adm-muted">No users.</p>');
  }
  window.admLbPrev = () => { $('adm-lb-prev').innerHTML = window.lb.pill({ text: $('adm-lb-text').value.trim() || 'LABEL', color: $('adm-lb-color').value, style: $('adm-lb-style').value, icon: $('adm-lb-icon').value }); };
  window.admLbPreset = i => { const p = LB_PRESETS[i]; $('adm-lb-text').value = p.text; $('adm-lb-color').value = p.color; $('adm-lb-style').value = p.style; $('adm-lb-icon').value = p.icon; window.admLbPrev(); };
  window.admLbColor = c => { $('adm-lb-color').value = c; window.admLbPrev(); };
  window.admLbReset = () => { lbEditId = null; $('adm-lb-text').value = ''; $('adm-lb-color').value = '#e5484d'; $('adm-lb-style').value = 'solid'; $('adm-lb-icon').value = 'code'; $('adm-lb-ttl').textContent = 'New label'; window.admLbPrev(); };

  // daftar update log dipisah supaya form tidak ikut terhapus setiap ada data masuk dari Firebase
  function updList() {
    return getStoredData('updatesDb', []).map(u => row('', esc(u.title), esc(u.body).slice(0, 140) + ' · ' + new Date(u.ts).toLocaleString(), btn('Delete', `admAct('updDel','${esc(u.id)}')`, 'red'))).join('') || '<p class="adm-muted">No updates yet.</p>';
  }
  function render() {
    if (!isDev()) return;
    $('adm-tabs').innerHTML = MENU.map(m => `<div class="adm-chip ${m[0] === tab ? 'active' : ''}" onclick="admTab('${m[0]}')">${m[1]}</div>`).join('');
    if (tab === 'updatelog' && $('adm-upd-list')) { $('adm-upd-list').innerHTML = updList(); return; }
    if (tab === 'app' && $('adm-app-status')) { $('adm-app-status').innerHTML = appStatus(); return; }
    if (tab === 'labels' && $('adm-lb-lists')) { $('adm-lb-lists').innerHTML = lbLists(); return; }
    $('adm-body').innerHTML = VIEW[tab]();
  }
})();

/* ===== blok JS 4 ===== */
/* ORVEXA FIREBASE REALTIME SYNC — localStorage tetap jadi cache, Firestore jadi sumber data multi device */
(function () {
  const DEV = 'risky.err', auth = window.orvexaAuth, db = window.orvexaDb, FV = firebase.firestore.FieldValue;
  const $ = id => document.getElementById(id), G = getStoredData;
  const L = (k, v) => { try { localStorage.setItem('orvexa_' + k, JSON.stringify(v)); } catch (e) { console.warn('localStorage penuh', e); } };
  const J = o => JSON.parse(JSON.stringify(o)), same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const FIELDS = ['name', 'username', 'email', 'avatar', 'verified', 'banned', 'role', 'isOnline', 'bio', 'joinedAt', 'banner', 'bpos', 'frame', 'tiktok', 'instagram', 'whatsapp', 'banReason', 'banAt', 'banUntil', 'banNote'];
  const snap = m => ({ read: !!m.read, text: m.text || '', edited: !!m.edited, deleted: !!m.deleted, pinned: !!m.pinned, rx: J(m.reactions || {}) });
  const typing = {};
  const NAME = /^[a-z0-9._-]{2,30}$/;
  let base = { users: {}, friends: {}, blocks: {}, stories: {}, chats: {} }, ready = {}, roomReady = {}, raw = {};
  let unsubs = [], roomUnsubs = {}, chain = Promise.resolve(), uid = null, session = null, hb = null, busy = false, roomRaw = {}, cleared = {}, storiesRaw = {};
  const me = () => currentUser && currentUser.username, isDev = () => me() === DEV;
  const q = fn => (chain = chain.then(fn).catch(e => console.warn('[OrVexa Firebase]', e)));
  const ROOMS = (a, b) => [a, b].sort().join('_vs_');
  const NOAV = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#2a2a30"/><circle cx="50" cy="38" r="17" fill="#6b6b75"/><path d="M16 92c2-20 16-30 34-30s32 10 34 30z" fill="#6b6b75"/></svg>');

  function resetState() {
    unsubs.forEach(u => u()); Object.values(roomUnsubs).forEach(u => u());
    unsubs = []; roomUnsubs = {}; ready = {}; roomReady = {}; raw = {}; roomRaw = {}; cleared = {}; storiesRaw = {}; session = null; clearInterval(hb); hb = null;
    base = { users: {}, friends: {}, blocks: {}, stories: {}, chats: {} };
  }
  const clearCache = () => { L('users', []); L('friendsDb', {}); L('blocksDb', {}); L('storiesDb', {}); L('chatsDb', {}); L('acceptsDb', {}); };

  // Foto base64 besar dikecilkan saat ditulis ke Firestore (batas 1 MB/dokumen); tampilan lokal tidak berubah.
  const shrink = (src, max) => !src || !/^data:image/.test(src) || src.length < 150000 ? Promise.resolve(src) : new Promise(res => {
    const im = new Image();
    im.onload = () => { const r = Math.min(1, max / Math.max(im.width, im.height)), c = document.createElement('canvas'); c.width = im.width * r; c.height = im.height * r; c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); res(c.toDataURL('image/jpeg', 0.7)); };
    im.onerror = () => res(src); im.src = src;
  });

  // ---------- LOCAL -> FIREBASE ----------
  function prep(key, val) {
    if (key !== 'chatsDb') return;
    Object.values(val).forEach(a => a.forEach(m => { if (!m.id) m.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7); if (!m.ts) m.ts = Date.now(); }));
  }
  function push(key, val) {
    if (!auth.currentUser || !session) return;
    if (key === 'users' && ready.users) pushUsers(val);
    else if (key === 'friendsDb' && ready.friends) pushLists('friends', val);
    else if (key === 'blocksDb' && ready.blocks) pushLists('blocks', val);
    else if (key === 'storiesDb' && ready.stories) pushStories(val);
    else if (key === 'chatsDb') pushChats(val);
    else if ((key === 'adminNotifs' || key === 'adminVersionNote') && isDev()) q(() => db.collection('meta').doc(key).set({ value: val }));
  }
  function pushUsers(list) {
    const b = base.users, seen = {};
    list.forEach(u => {
      if (!u.uid) return; seen[u.uid] = 1;
      const o = b[u.uid]; if (!o) return;
      const d = {}; FIELDS.forEach(f => { if (u[f] !== undefined && u[f] !== o[f]) d[f] = u[f]; });
      if (!Object.keys(d).length || (u.uid !== uid && !isDev())) return;
      if (d.username && !NAME.test(d.username)) return;
      b[u.uid] = { ...o, ...d };
      q(async () => {
        if ('avatar' in d) d.avatar = await shrink(d.avatar, 512);
        if ('isOnline' in d) d.lastSeen = FV.serverTimestamp();
        const bt = db.batch();
        if (d.username) { bt.set(db.collection('usernames').doc(d.username), { uid: u.uid, email: u.email }); bt.delete(db.collection('usernames').doc(o.username)); }
        bt.update(db.collection('users').doc(u.uid), d); await bt.commit();
      });
    });
    if (isDev()) Object.keys(b).forEach(k => { if (!seen[k] && k !== uid) { const o = b[k]; delete b[k]; q(() => { const bt = db.batch(); bt.delete(db.collection('users').doc(k)); bt.delete(db.collection('usernames').doc(o.username)); return bt.commit(); }); } });
  }
  function pushLists(col, val) {
    const b = base[col];
    new Set([...Object.keys(val), ...Object.keys(b)]).forEach(o => {
      const n = val[o] || [], old = b[o] || [];
      if (same(n, old)) return;
      b[o] = n.slice();
      const add = n.filter(x => !old.includes(x)), grow = old.every(x => n.includes(x));
      q(() => db.collection(col).doc(o).set(grow ? { list: FV.arrayUnion(...add) } : { list: n }, { merge: true }));
    });
  }
  function pushStories(val) {
    const b = base.stories;
    new Set([...Object.keys(val), ...Object.keys(b)]).forEach(u => {
      const n = val[u], o = b[u], ref = db.collection('stories').doc(u);
      if (same(n, o)) return;
      if (!n) { delete b[u]; q(() => ref.delete()); return; }
      b[u] = J(n);
      if (!o || o.createdAt !== n.createdAt || o.img !== n.img || o.caption !== n.caption || o.video !== n.video || o.text !== n.text || o.privacy !== n.privacy) { q(async () => { const d = { ...n }; if (d.img) d.img = await shrink(d.img, 900); await ref.set(d); }); return; }
      const bv = (o.views || []).map(v => v.username), ov = o.likes || [], nv = n.likes || [];
      const av = (n.views || []).filter(v => !bv.includes(v.username)), al = nv.filter(x => !ov.includes(x)), rl = ov.filter(x => !nv.includes(x));
      if (av.length) q(() => ref.update({ views: FV.arrayUnion(...av) }));
      if (al.length) q(() => ref.update({ likes: FV.arrayUnion(...al) }));
      if (rl.length) q(() => ref.update({ likes: FV.arrayRemove(...rl) }));
    });
  }
  function pushChats(val) {
    const b = base.chats, col = r => db.collection('chats').doc(r).collection('messages');
    new Set([...Object.keys(val), ...Object.keys(b)]).forEach(r => {
      if (isDev() ? !ready.chats : (roomUnsubs[r] && !roomReady[r])) return;
      const msgs = val[r] || [], old = b[r] || {}, now = {}, ops = [];
      msgs.forEach(m => {
        const n = snap(m), o = old[m.id], ref = col(r).doc(m.id); now[m.id] = n;
        if (!o) {
          const d = { sender: m.sender, text: m.text || '', time: m.time || '', read: !!m.read, ts: m.ts };
          ['audio', 'dur', 'replyTo', 'media'].forEach(k => { if (m[k] !== undefined) d[k] = m[k]; });
          ops.push(bt => bt.set(ref, d)); return;
        }
        const d = {}; ['read', 'text', 'edited', 'deleted', 'pinned'].forEach(k => { if (o[k] !== n[k]) d[k] = n[k]; });
        if (d.deleted) { d.audio = FV.delete(); d.media = FV.delete(); d.dur = FV.delete(); d.replyTo = FV.delete(); }
        if (Object.keys(d).length) ops.push(bt => bt.update(ref, d));
        new Set([...Object.keys(o.rx), ...Object.keys(n.rx)]).forEach(u => {
          if (o.rx[u] !== n.rx[u]) ops.push(bt => bt.update(ref, new firebase.firestore.FieldPath('reactions', u), n.rx[u] === undefined ? FV.delete() : n.rx[u]));
        });
      });
      Object.keys(old).forEach(id => { if (!now[id]) ops.push(bt => bt.delete(col(r).doc(id))); });
      if (!ops.length) return;
      b[r] = now;
      for (let i = 0; i < ops.length; i += 400) q(() => { const bt = db.batch(); ops.slice(i, i + 400).forEach(f => f(bt)); return bt.commit(); });
    });
  }
  window.orvexaAccept = r => {
    const prev = J(G('acceptsDb', {})), ac = J(prev); ac[r] = Date.now(); L('acceptsDb', ac);
    return run(db.collection('chats').doc(r).set({ accepted: ac[r], acceptedBy: me() }, { merge: true }), (currentLang === 'id' ? 'Chat diterima' : 'Chat accepted'), () => L('acceptsDb', prev));
  };
  window.orvexaReport = o => q(() => db.collection('reports').add(o));
  // Operasi admin: langsung ke Firestore (tidak menunggu antrean q), tampil di layar seketika, dan memberi tahu bila gagal.
  const say = m => { if (window.toast) window.toast(m); };
  const redraw = () => { if (window.admRender) window.admRender(); };
  const why = e => e && e.code === 'permission-denied'
    ? 'Ditolak server (permission-denied). Firestore Rules belum mengenali akun ini sebagai developer.'
    : 'Gagal: ' + ((e && (e.code || e.message)) || 'unknown');
  const run = (p, okMsg, undo) => Promise.race([p, new Promise(r => setTimeout(() => r('slow'), 15000))]).then(r => {
    say(r === 'slow' ? 'Koneksi lambat, perubahan dikirim saat online.' : okMsg); return true;
  }, e => { console.warn('[OrVexa Firebase]', e); if (undo) undo(); redraw(); say(why(e)); return false; });
  const edit = (key, fn) => { const prev = G(key, []); L(key, fn(prev)); redraw(); return () => { L(key, prev); }; };
  window.orvexaReportOp = (op, id) => {
    const undo = edit('reports', a => op === 'del' ? a.filter(x => x.id !== id) : a.map(x => x.id === id ? { ...x, status: 'resolved' } : x)), ref = db.collection('reports').doc(id);
    return run(op === 'del' ? ref.delete() : ref.update({ status: 'resolved' }), op === 'del' ? 'Report deleted' : 'Report resolved', undo);
  };
  window.orvexaUpdateAdd = o => {
    const ref = db.collection('updates').doc(), undo = edit('updatesDb', a => [{ id: ref.id, ...o }, ...a]);
    return run(ref.set(o), 'Update published', undo);
  };
  window.orvexaUpdateDel = id => {
    const undo = edit('updatesDb', a => a.filter(x => x.id !== id));
    return run(db.collection('updates').doc(id).delete(), 'Update deleted', undo);
  };
  window.orvexaSuggestOpen = open => {
    const prev = J(G('configDb', {})), c = J(prev); c.suggestions = { open }; L('configDb', c); redraw();
    return run(db.collection('config').doc('suggestions').set({ open }), open ? 'Suggestion box opened' : 'Suggestion box closed', () => L('configDb', prev));
  };
  window.orvexaConfigSet = (id, d, okMsg) => {
    const prev = J(G('configDb', {})), c = J(prev); c[id] = d; L('configDb', c); redraw();
    return run(db.collection('config').doc(id).set(d), okMsg, () => L('configDb', prev));
  };
  window.orvexaLabelsSave = d => {
    const prev = J(G('configDb', {})), c = J(prev); c.labels = d; L('configDb', c); redraw();
    return run(db.collection('config').doc('labels').set(d), 'Labels saved', () => L('configDb', prev));
  };
  window.orvexaSuggest = o => q(() => db.collection('suggestions').add(o));
  window.orvexaComplain = o => q(() => db.collection('complaints').add(o));
  window.orvexaTicketOp = (col, op, id) => {
    const undo = edit(col + 'Db', a => op === 'del' ? a.filter(x => x.id !== id) : a.map(x => x.id === id ? { ...x, status: 'done' } : x)), ref = db.collection(col).doc(id);
    return run(op === 'del' ? ref.delete() : ref.update({ status: 'done' }), op === 'del' ? 'Deleted' : 'Marked as done', undo);
  };
  let lastTyping = 0;
  window.orvexaTyping = function () {
    if (!uid || !activeChatUser || isSystemChat || !activeChatUser.username || Date.now() - lastTyping < 2500) return;
    lastTyping = Date.now();
    db.collection('chats').doc(currentChatId()).set({ typing: { [me()]: Date.now() } }, { merge: true }).catch(() => {});
  };
  window.orvexaSync = { prep, push };

  // ---------- FIREBASE -> LOCAL (REALTIME) ----------
  function refresh() {
    if (!currentUser) return;
    if (window.bellUpdate) window.bellUpdate();
    try {
      const s = (document.querySelector('.screen.active') || {}).id;
      if (s === 'dashboard-screen') renderDashboard();
      else if (s === 'stories-tab-screen') renderStoriesTab();
      else if (s === 'settings-tab-screen') renderSettingsTab();
      else if (s === 'admin-screen' && window.admRender) window.admRender();
      else if (s === 'user-info-screen' && window.fillUserInfo) window.fillUserInfo();
      else if (s === 'chat-room-screen' && activeChatUser) {
        if (!isSystemChat && activeChatUser.username) {
          const f = G('users', []).find(u => u.username === activeChatUser.username), on = !!(f && f.isOnline);
          const tp = typing[currentChatId()], tn = !!tp && Date.now() - tp < 5000;
          $('active-chat-status').className = 'user-status-text ' + (on || tn ? 'status-online' : 'status-offline');
          $('active-chat-status-text').innerText = tn ? (currentLang === 'id' ? 'Mengetik…' : 'typing…') : (on ? 'Online' : 'Offline');
          if (f && f.avatar) $('active-chat-avatar').src = f.avatar;
          markMessagesAsRead(activeChatUser.username);
        }
        if (![...document.querySelectorAll('#chat-messages-area audio, #chat-messages-area video')].some(a => !a.paused)) renderMessages();
      }
    } catch (e) { console.warn(e); }
  }
  // Online = flag true + heartbeat < 75 detik (tab ditutup paksa tetap jadi offline).
  function rebuildUsers() {
    const t = Date.now(), bl = G('blocksDb', {}), mine = me();
    const hidden = (n, i) => i !== uid && mine && (bl[n] || []).includes(mine);
    const list = Object.keys(raw).map(id => {
      const d = raw[id], ls = d.lastSeen && d.lastSeen.toMillis ? d.lastSeen.toMillis() : 0;
      return { uid: id, name: d.name, username: d.username, email: d.email, avatar: hidden(d.username, id) ? NOAV : d.avatar, verified: !!d.verified, banned: !!d.banned, role: d.role || 'user', bio: d.bio || '', banner: d.banner || '', bpos: typeof d.bpos === 'number' ? d.bpos : 50, frame: d.frame || '', tiktok: d.tiktok || '', instagram: d.instagram || '', whatsapp: d.whatsapp || '', banReason: d.banReason || '', banAt: d.banAt || 0, banUntil: d.banUntil || 0, banNote: d.banNote || '', joinedAt: d.joinedAt || 0, lastSeen: ls, isOnline: !!d.isOnline && (id === uid || t - ls < 75000) };
    });
    base.users = {}; list