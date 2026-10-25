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
        agree_terms: "I agree to the <u class=\"legal-link\" onclick=\"openLegal('terms', event)\">Terms of Use</u> & <u class=\"legal-link\" onclick=\"openLegal('privacy', event)\">Privacy Policy</u>",
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
        item_terms: "Terms of Use",
        item_privacy: "Privacy Policy",
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
        agree_terms: "Saya menyetujui <u class=\"legal-link\" onclick=\"openLegal('terms', event)\">Syarat Penggunaan</u> & <u class=\"legal-link\" onclick=\"openLegal('privacy', event)\">Kebijakan Privasi</u>",
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
        item_terms: "Syarat Penggunaan",
        item_privacy: "Kebijakan Privasi",
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
    async updPost() {
      const t = $('adm-upd-title').value.trim(), b = $('adm-upd-body').value.trim();
      if (!t || !b) return alert('Title and message are required');
      const src = ($('adm-upd-lang') || {}).value === 'en' ? 'en' : 'id', dst = src === 'id' ? 'en' : 'id';
      const o = { title: t.slice(0, 80), body: b.slice(0, 1000), ts: Date.now(), author: currentUser.username, srcLang: src };
      o['title_' + src] = o.title; o['body_' + src] = o.body;
      if (window.toast) window.toast('Translating…');
      const [tt, bt] = await Promise.all([autoTranslate(o.title, src, dst), autoTranslate(o.body, src, dst)]);
      if (tt && bt) { o['title_' + dst] = tt.slice(0, 80); o['body_' + dst] = bt.slice(0, 1000); }
      else if (window.toast) window.toast('Translation failed — published in the original language only');
      window.orvexaUpdateAdd(o).then(ok => {
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
        <select id="adm-upd-lang" style="margin-top:8px;width:100%;padding:10px;border-radius:12px;background:var(--bg-input);border:1px solid var(--border-color);color:var(--text-main)"><option value="id">Written in: Indonesian (auto-translate to English)</option><option value="en">Written in: English (auto-translate to Indonesian)</option></select>
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

  // terjemahan otomatis (MyMemory, gratis, tanpa API key). Gagal -> null, update tetap terbit dalam bahasa aslinya.
  async function autoTranslate(text, from, to) {
    try {
      const parts = [], lines = text.split('\n');
      let cur = '';
      lines.forEach(l => { if ((cur + '\n' + l).length > 450) { if (cur) parts.push(cur); cur = l.slice(0, 450); } else cur = cur ? cur + '\n' + l : l; });
      if (cur) parts.push(cur);
      const out = [];
      for (const p of parts) {
        const r = await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(p) + '&langpair=' + from + '|' + to);
        const j = await r.json();
        const tx = j && j.responseData && j.responseData.translatedText;
        if (!tx || /MYMEMORY WARNING|QUERY LENGTH LIMIT/i.test(tx)) return null;
        out.push(tx);
      }
      return out.join('\n');
    } catch (e) { console.warn('[OrVexa] translate', e); return null; }
  }
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
    base.users = {}; list.forEach(u => base.users[u.uid] = { ...u }); L('users', list);
  }
  function renderRoom(r) {
    const msgs = (roomRaw[r] || []).filter(m => m.ts > (cleared[r] || 0));
    const c = G('chatsDb', {}); c[r] = msgs; L('chatsDb', c);
    base.chats[r] = {}; msgs.forEach(m => base.chats[r][m.id] = snap(m));
  }
  function applyRoom(r, s) {
    roomRaw[r] = s.docs.map(d => ({ id: d.id, ...d.data({ serverTimestamps: 'estimate' }) })).sort((a, b) => a.ts - b.ts);
    renderRoom(r); roomReady[r] = true; refresh();
  }
  function syncRooms(list) {
    const want = new Set(isDev() ? [] : list.map(f => ROOMS(me(), f)).concat('SYSTEM_' + me()));
    Object.keys(roomUnsubs).forEach(r => { if (!want.has(r)) { roomUnsubs[r](); delete roomUnsubs[r]; } });
    want.forEach(r => {
      if (roomUnsubs[r]) return;
      const other = r.startsWith('SYSTEM_') ? null : r.split('_vs_').find(x => x !== me());
      const u1 = db.collection('chats').doc(r).collection('messages').onSnapshot(s => applyRoom(r, s), e => console.warn(r, e));
      const u2 = other ? db.collection('chats').doc(r).onSnapshot(s => { const d = s.exists ? s.data() : {}; typing[r] = (d.typing && d.typing[other]) || 0; { const ac = G('acceptsDb', {}); if ((ac[r] || 0) !== (d.accepted || 0)) { ac[r] = d.accepted || 0; L('acceptsDb', ac); } } refresh(); if (typing[r]) setTimeout(refresh, 5200); }, () => {}) : () => {};
      roomUnsubs[r] = () => { u1(); u2(); };
    });
  }
  // privasi story: yang tidak boleh dilihat disaring dari cache (dan dari base agar tidak ikut terhapus)
  function renderStories() {
    const vis = {}, mine = me(), fr = base.friends;
    Object.keys(storiesRaw).forEach(u => {
      const st = storiesRaw[u];
      if (isDev() || u === mine || st.privacy !== 'friends' || (fr[u] || []).includes(mine) || (fr[mine] || []).includes(u)) vis[u] = st;
    });
    base.stories = J(vis); L('storiesDb', vis);
  }
  function listen() {
    const wait = [];
    const on = (name, ref, fn) => {
      let r; wait.push(new Promise(s => r = s));
      unsubs.push(ref.onSnapshot(s => { fn(s); ready[name] = true; r(); refresh(); }, e => { console.warn(name, e); r(); }));
    };
    const map = fn => s => { const f = {}; s.forEach(d => f[d.id] = fn(d)); return f; };
    on('users', db.collection('users'), s => {
      raw = {}; s.forEach(d => raw[d.id] = d.data({ serverTimestamps: 'estimate' }));
      if (!raw[uid]) { alert('Account removed.'); window.handleLogOut(); return; }
      rebuildUsers(); currentUser = { ...currentUser, ...base.users[uid], uid }; L('currentUser', currentUser);
      if (window.banCheck) window.banCheck();
      const nc = raw[uid].cleared || {}; if (!same(nc, cleared)) { cleared = nc; Object.keys(roomRaw).forEach(renderRoom); }
    });
    on('friends', db.collection('friends'), s => { const f = map(d => d.data().list || [])(s); base.friends = J(f); L('friendsDb', f); syncRooms(f[me()] || []); if (ready.stories) renderStories(); });
    on('blocks', db.collection('blocks'), s => { const f = map(d => d.data().list || [])(s); base.blocks = J(f); L('blocksDb', f); if (ready.users) rebuildUsers(); });
    on('stories', db.collection('stories'), s => { storiesRaw = map(d => d.data())(s); renderStories(); });
    on('updates', db.collection('updates'), s => { const a = []; s.forEach(d => a.push({ id: d.id, ...d.data() })); a.sort((x, y) => y.ts - x.ts); L('updatesDb', a); });
    on('config', db.collection('config'), s => { const c = {}; s.forEach(d => c[d.id] = d.data()); L('configDb', c); });
    if (isDev()) {
      on('chats', db.collectionGroup('messages'), s => {
        const c = {}; base.chats = {};
        s.forEach(d => { const r = d.ref.parent.parent.id, m = { id: d.id, ...d.data({ serverTimestamps: 'estimate' }) }; (c[r] = c[r] || []).push(m); (base.chats[r] = base.chats[r] || {})[d.id] = snap(m); });
        Object.values(c).forEach(a => a.sort((x, y) => x.ts - y.ts)); L('chatsDb', c);
      });
      on('meta', db.collection('meta'), s => s.forEach(d => L(d.id, d.data().value)));
      on('reports', db.collection('reports'), s => { const a = []; s.forEach(d => a.push({ id: d.id, ...d.data() })); a.sort((x, y) => y.ts - x.ts); L('reports', a); });
      ['suggestions', 'complaints'].forEach(col => on(col, db.collection(col), s => { const a = []; s.forEach(d => a.push({ id: d.id, ...d.data() })); a.sort((x, y) => y.ts - x.ts); L(col + 'Db', a); }));
    }
    return Promise.race([Promise.all(wait), new Promise(r => setTimeout(r, 5000))]);
  }

  // ---------- SESSION, PRESENCE, AUTH ----------
  const beat = on => { if (uid) q(() => db.collection('users').doc(uid).update({ isOnline: on, lastSeen: FV.serverTimestamp() })); };
  function startSession(user) {
    if (session && uid === user.uid) return session;
    uid = user.uid;
    const s = session = (async () => {
      const snap = await db.collection('users').doc(user.uid).get();
      if (!snap.exists) throw new Error('profile-missing');
      const p = { uid: user.uid, ...snap.data() };
      if ((G('currentUser', null) || {}).uid !== user.uid) clearCache();
      currentUser = p; L('currentUser', p);
      await listen(); beat(true);
      if (!p.joinedAt) q(() => db.collection('users').doc(user.uid).update({ joinedAt: Date.parse(user.metadata.creationTime) || Date.now() }));
      hb = setInterval(() => { if (!document.hidden) beat(true); }, 30000);
      return p;
    })();
    s.catch(() => { if (session === s) { session = null; uid = null; } });
    return s;
  }
  document.addEventListener('visibilitychange', () => beat(!document.hidden));
  window.addEventListener('pagehide', () => beat(false));
  setInterval(() => { if (uid && ready.users) { rebuildUsers(); refresh(); } }, 30000);

  auth.onAuthStateChanged(async user => {
    if (busy) return;
    if (!user) {
      resetState(); uid = null;
      if (currentUser) { currentUser = null; localStorage.removeItem('orvexa_currentUser'); showScreen('landing-screen'); }
      return;
    }
    try { await startSession(user); } catch (e) { console.warn('[OrVexa Firebase]', e); }
  });

  // Clear chat bersifat individu: hanya menyembunyikan pesan untuk akun ini (semua perangkatnya), lawan chat tidak terpengaruh.
  window.clearChat = function () {
    if (!confirm(currentLang === 'id' ? 'Bersihkan semua pesan di chat ini?' : 'Clear all messages in this chat?')) return;
    const r = currentChatId(), ts = Date.now();
    cleared[r] = ts; renderRoom(r);
    if (uid) q(() => db.collection('users').doc(uid).update(new firebase.firestore.FieldPath('cleared', r), ts));
    renderMessages(); closeSidebarDirect();
  };

  window.handleSignUp = async function (e) {
    e.preventDefault();
    const name = $('signup-fullname').value.trim(), username = $('signup-username').value.trim().toLowerCase(), email = $('signup-email').value.trim().toLowerCase();
    const pass = $('signup-pass').value, err = $('signup-error'), id = currentLang === 'id';
    const fail = m => { err.innerText = m; err.style.display = 'block'; };
    if (pass !== $('signup-confirm-pass').value) return fail(id ? 'Konfirmasi Password tidak cocok!' : 'Password confirmation does not match!');
    if (!NAME.test(username)) return fail(id ? 'Username hanya boleh huruf kecil, angka, titik, _ dan -' : 'Username may only contain lowercase letters, numbers, dot, _ and -');
    err.style.display = 'none'; busy = true;
    let cred;
    try {
      cred = await auth.createUserWithEmailAndPassword(email, pass);
      const bt = db.batch();
      bt.set(db.collection('usernames').doc(username), { uid: cred.user.uid, email });
      bt.set(db.collection('users').doc(cred.user.uid), { name, username, email, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + username, verified: false, banned: false, role: username === DEV ? 'admin' : 'user', isOnline: false, bio: '', joinedAt: Date.now() });
      await bt.commit(); await auth.signOut(); busy = false;
      alert(id ? 'Akun berhasil dibuat! Silakan Sign In.' : 'Account created successfully! Please Sign In.');
      showScreen('signin-screen');
    } catch (ex) {
      busy = false;
      if (cred) { try { await cred.user.delete(); } catch (_) {} }
      fail(ex.code === 'auth/email-already-in-use' ? (id ? 'Email sudah terdaftar!' : 'Email already registered!') : ex.code === 'permission-denied' ? (id ? 'Username sudah terdaftar!' : 'Username already registered!') : (ex.message || 'Registration failed.'));
    }
  };

  window.handleSignIn = async function (e) {
    e.preventDefault();
    const input = $('signin-username').value.trim().toLowerCase(), pass = $('signin-pass').value, err = $('signin-error'), id = currentLang === 'id';
    const fail = m => { err.innerText = m; err.style.display = 'block'; };
    const bad = id ? 'Akun tidak ditemukan atau password salah!' : 'Account not found or password incorrect!';
    err.style.display = 'none';
    try {
      let email = input;
      if (!input.includes('@')) { const u = await db.collection('usernames').doc(input).get(); if (!u.exists) return fail(bad); email = u.data().email; }
      busy = true; const cred = await auth.signInWithEmailAndPassword(email, pass); busy = false;
      await startSession(cred.user);
      setUserStatus(currentUser.username, true);
      $('loading-screen').style.display = 'flex';
      setTimeout(() => { $('loading-screen').style.display = 'none'; switchTab('chats'); }, 1200);
    } catch (ex) { busy = false; fail(ex.message === 'banned' ? 'This account has been banned.' : bad); }
  };

  window.handleLogOut = async function () {
    clearInterval(hb);
    if (uid) await q(() => db.collection('users').doc(uid).update({ isOnline: false, lastSeen: FV.serverTimestamp() }));
    busy = true; resetState();
    try { await auth.signOut(); } catch (_) {}
    busy = false; uid = null; currentUser = null; localStorage.removeItem('orvexa_currentUser'); clearCache(); showScreen('landing-screen');
  };
})();

/* ===== blok JS 5 ===== */
/* ORVEXA UI: sheet profil, voice note, tombol coming soon */
(function () {
  const $ = id => document.getElementById(id), id = () => currentLang === 'id';
  let rec = null, chunks = [], stream = null, t0 = 0, tick = null, cancelled = false;
  window.openSheet = n => $(n).classList.add('active');
  window.closeSheet = e => { if (e && e.target && !e.target.classList.contains('sheet-overlay')) return; document.querySelectorAll('.sheet-overlay').forEach(x => x.classList.remove('active')); };
  window.comingSoon = () => alert(id() ? 'Segera hadir!' : 'Coming soon!');
  window.copyText = row => { const t = row.querySelector('.pf-val').textContent, ic = row.querySelector('.pf-copy'); if (navigator.clipboard) navigator.clipboard.writeText(t).catch(() => {}); ic.className = 'fa-solid fa-check pf-copy'; setTimeout(() => ic.className = 'fa-regular fa-copy pf-copy', 1200); };

  const _rst = renderSettingsTab;
  renderSettingsTab = function () {
    _rst();
    if (!currentUser) return;
    const u = getStoredData('users', []).find(x => x.username === currentUser.username) || currentUser;
    $('pf-role').style.display = u.username === 'risky.err' ? 'inline-block' : 'none';
    $('pf-verified').style.display = u.verified ? 'inline-block' : 'none';
    $('pf-link').textContent = 'orvexa.me/' + u.username;
    $('pf-username').textContent = u.username;
    $('pf-id').textContent = currentUser.uid || u.uid || '-';
  };

  // ----- Info users & blokir -----
  const T = (en, idn) => id() ? idn : en;
  const target = () => (activeChatUser && !isSystemChat && activeChatUser.username) ? activeChatUser.username : null;
  const iBlocked = () => { const t = target(); return !!t && !!currentUser && (getBlocks()[currentUser.username] || []).includes(t); };
  window.fillUserInfo = function () {
    const t = target(); if (!t) return;
    const u = getStoredData('users', []).find(x => x.username === t) || activeChatUser, bl = iBlocked();
    $('ui-avatar').src = u.avatar || activeChatUser.avatar; $('ui-name').textContent = u.name || t;
    $('ui-verified').style.display = u.verified ? 'inline-block' : 'none';
    $('ui-username').textContent = '@' + t; $('ui-link').textContent = 'orvexa.me/' + t;
    $('ui-block-label').textContent = bl ? T('Unblock', 'Buka blokiran') : T('Block', 'Blokir');
    $('ui-block-icon').className = 'fa-solid ' + (bl ? 'fa-user-check' : 'fa-user-slash');
    $('ui-block-btn').classList.toggle('on', bl);
  };
  window.openUserInfo = () => { if (!target()) return; fillUserInfo(); showScreen('user-info-screen'); };
  window.closeUserInfo = () => showScreen('chat-room-screen');
  window.copyPlain = el => { const sp = el.querySelector('span'), t = (sp || el).textContent; if (navigator.clipboard) navigator.clipboard.writeText(t).catch(() => {}); };
  window.toggleBlock = function () {
    const t = target(); if (!t) return;
    const b = getBlocks(), me = currentUser.username, list = b[me] || [];
    if (list.includes(t)) b[me] = list.filter(x => x !== t);
    else { if (!confirm(T('Block this user?', 'Blokir pengguna ini?'))) return; b[me] = list.concat(t); }
    setStoredData('blocksDb', b);
    closeSidebarDirect(); updateBlockUI();
    if (document.getElementById('user-info-screen').classList.contains('active')) fillUserInfo();
  };
  function updateBlockUI() {
    const bl = iBlocked(), ab = $('chat-action-btn');
    $('blocked-bar').style.display = bl ? 'flex' : 'none';
    $('blocked-text').textContent = T('You blocked this contact', 'Kamu memblokir kontak ini');
    $('blocked-btn').textContent = T('Unblock', 'Buka blokiran');
    if (bl) { $('msg-field').style.display = 'none'; $('rec-field').style.display = 'none'; ab.style.display = 'none'; }
    else { ab.style.display = ''; if (!rec) $('msg-field').style.display = 'flex'; }
    const lab = $('sidebar-block-label'); if (lab) lab.textContent = bl ? T('Unblock', 'Buka blokiran') : T('Block User', 'Blokir User');
  }
  const _rm = renderMessages;
  renderMessages = function () { _rm(); updateBlockUI(); };

  const _ar = autoResizeTextarea;
  autoResizeTextarea = function (el) { _ar(el); syncActionBtn(); if (el.value && window.orvexaTyping) orvexaTyping(); };

  
  function syncActionBtn() {
    if (rec) return;
    const has = $('chat-input').value.trim().length > 0, b = $('chat-action-btn');
    b.className = 'btn-action' + (has ? ' is-send' : '');
    b.innerHTML = '<i class="fa-solid ' + (has ? 'fa-paper-plane' : 'fa-microphone') + '"></i>';
  }
  window.syncActionBtn = syncActionBtn;
  window.chatAction = () => { if (rec) stopVoice(true); else if ($('chat-input').value.trim()) sendMessage(); else startVoice(); };
  window.cancelVoice = () => stopVoice(false);

  async function startVoice() {
    if (!navigator.mediaDevices || !window.MediaRecorder) return alert(id() ? 'Browser tidak mendukung rekam suara.' : 'Voice recording is not supported.');
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
    catch (e) { return alert(id() ? 'Izin mikrofon ditolak.' : 'Microphone permission denied.'); }
    const mime = ['audio/webm;codecs=opus', 'audio/mp4', 'audio/webm'].find(m => MediaRecorder.isTypeSupported(m));
    chunks = []; cancelled = false;
    rec = new MediaRecorder(stream, mime ? { mimeType: mime, audioBitsPerSecond: 16000 } : { audioBitsPerSecond: 16000 });
    rec.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
    rec.onstop = onStop; rec.start(); t0 = Date.now();
    $('msg-field').style.display = 'none'; $('rec-field').style.display = 'flex';
    const b = $('chat-action-btn'); b.className = 'btn-action is-send'; b.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
    $('rec-time').textContent = '0:00';
    tick = setInterval(() => { const s = Math.floor((Date.now() - t0) / 1000); $('rec-time').textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); if (s >= 60) stopVoice(true); }, 250);
  }
  function stopVoice(send) { cancelled = !send; clearInterval(tick); if (rec && rec.state !== 'inactive') rec.stop(); }
  function onStop() {
    const dur = Math.round((Date.now() - t0) / 1000), type = (rec.mimeType || 'audio/webm').split(';')[0];
    stream.getTracks().forEach(t => t.stop()); rec = null;
    $('rec-field').style.display = 'none'; $('msg-field').style.display = 'flex'; syncActionBtn();
    if (cancelled || dur < 1) return;
    const r = new FileReader(); r.onload = () => sendVoiceNote(r.result, dur); r.readAsDataURL(new Blob(chunks, { type }));
  }

  // pesan suara dikirim lewat fungsi kirim yang sama dengan pesan lain
  function sendVoiceNote(data, dur) { sendRich({ text: '', audio: data, dur }); }
})();

/* ===== blok JS 6 ===== */
/* ORVEXA FEATURES: chat lanjutan, media, story, profil, laporan */
(function () {
  const $ = id => document.getElementById(id), G = getStoredData, tr = (en, idn) => currentLang === 'id' ? idn : en;
  const open = n => $(n).classList.add('active'), shut = n => $(n).classList.remove('active');
  const chatTarget = () => (activeChatUser && !isSystemChat && activeChatUser.username) ? activeChatUser.username : null;
  const me = () => currentUser.username;
  const userOf = n => G('users', []).find(x => x.username === n);

  // ---------- teks dua bahasa untuk elemen statis ----------
  function applyFx() {
    document.querySelectorAll('[data-en]').forEach(el => {
      const v = el.getAttribute(currentLang === 'id' ? 'data-id' : 'data-en');
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = v; else el.textContent = v;
    });
  }
  const _cl = changeLanguage;
  changeLanguage = function (v) { _cl(v); applyFx(); };
  applyFx();

  let tt = null;
  function toast(msg) {
    let t = $('toast'); if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 2000);
  }
  window.toast = toast;

  const fmtJoined = ms => ms ? tr('Joined ', 'Bergabung sejak ') + new Date(ms).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { month: 'short', year: 'numeric' }) : '-';
  const fmtSeen = ms => { const d = new Date(ms), t = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); return new Date().toDateString() === d.toDateString() ? tr('today at ', 'hari ini ') + t : d.toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'short' }) + ' ' + t; };

  // ---------- menu pesan: reaksi, balas, salin, pin, edit, hapus ----------
  const EMO = ['👍', '❤️', '😂', '😮', '😢', '🙏'];
  let menuId = null;
  const msgs = () => { chatsDb = G('chatsDb', {}); return chatsDb[currentChatId()] || []; };
  const find = id => msgs().find(m => m.id === id);
  const save = () => { setStoredData('chatsDb', chatsDb); renderMessages(); };

  function showMenu(id) {
    const m = find(id); if (!m) return; menuId = id;
    const mine = m.sender === me(), ok = !m.deleted;
    $('mm-emojis').innerHTML = ok ? EMO.map(e => `<button data-emo="${e}" class="${(m.reactions || {})[me()] === e ? 'on' : ''}">${e}</button>`).join('') : '';
    const a = [];
    if (ok) a.push(['reply', 'fa-reply', tr('Reply', 'Balas')]);
    if (ok && m.text) a.push(['copy', 'fa-copy', tr('Copy', 'Salin')]);
    if (ok) a.push(['pin', 'fa-thumbtack', m.pinned ? tr('Unpin', 'Lepas pin') : tr('Pin message', 'Pin pesan')]);
    if (ok && mine && m.text && !m.audio && !m.media) a.push(['edit', 'fa-pen', tr('Edit', 'Edit')]);
    if (ok && mine) a.push(['del', 'fa-trash', tr('Delete for everyone', 'Hapus untuk semua')]);
    $('mm-actions').innerHTML = a.map(x => `<div class="settings-item" data-act="${x[0]}"><div class="settings-item-left"><i class="fa-solid ${x[1]}"></i> <span>${x[2]}</span></div></div>`).join('');
    open('sheet-msg');
  }
  $('sheet-msg').addEventListener('click', e => {
    const em = e.target.closest('[data-emo]'), ac = e.target.closest('[data-act]');
    if (em) react(em.dataset.emo); else if (ac) act(ac.dataset.act);
  });
  function react(e) {
    const m = find(menuId); if (!m) return;
    m.reactions = m.reactions || {};
    if (m.reactions[me()] === e) delete m.reactions[me()]; else m.reactions[me()] = e;
    closeSheet(); save();
  }
  function act(a) {
    const m = find(menuId); if (!m) return; closeSheet();
    if (a === 'reply') { pendingReply = { id: m.id, sender: m.sender, text: previewOf(m).slice(0, 80) }; editingId = null; syncComposer(); $('chat-input').focus(); }
    else if (a === 'copy') { if (navigator.clipboard) navigator.clipboard.writeText(m.text).catch(() => {}); }
    else if (a === 'pin') { m.pinned = !m.pinned; save(); }
    else if (a === 'edit') { editingId = m.id; pendingReply = null; const i = $('chat-input'); i.value = m.text; autoResizeTextarea(i); syncComposer(); i.focus(); }
    else if (a === 'del') {
      if (!confirm(tr('Delete this message for everyone?', 'Hapus pesan ini untuk semua orang?'))) return;
      m.deleted = true; m.text = ''; m.pinned = false; delete m.audio; delete m.media; delete m.dur; delete m.replyTo; save();
    }
  }
  window.syncComposer = function () {
    const b = $('composer-bar');
    if (editingId) { b.style.display = 'flex'; b.innerHTML = `<i class="fa-solid fa-pen"></i><div class="cb-txt"><b>${tr('Edit message', 'Edit pesan')}</b></div><button type="button" onclick="cancelComposer()"><i class="fa-solid fa-xmark"></i></button>`; }
    else if (pendingReply) { b.style.display = 'flex'; b.innerHTML = `<i class="fa-solid fa-reply"></i><div class="cb-txt"><b>${esc(pendingReply.sender === me() ? tr('You', 'Kamu') : pendingReply.sender)}</b><span>${esc(pendingReply.text)}</span></div><button type="button" onclick="cancelComposer()"><i class="fa-solid fa-xmark"></i></button>`; }
    else b.style.display = 'none';
  };
  window.cancelComposer = () => { pendingReply = null; if (editingId) { editingId = null; $('chat-input').value = ''; autoResizeTextarea($('chat-input')); } syncComposer(); };

  const area = $('chat-messages-area');
  let lp = null, fired = false;
  area.addEventListener('pointerdown', e => {
    const row = e.target.closest('.message-row'); if (!row || !row.dataset.id) return;
    fired = false; clearTimeout(lp); lp = setTimeout(() => { fired = true; showMenu(row.dataset.id); }, 450);
  });
  ['pointerup', 'pointercancel', 'scroll'].forEach(ev => area.addEventListener(ev, () => clearTimeout(lp)));
  area.addEventListener('contextmenu', e => e.preventDefault());
  function goto(id) {
    if (!id) return;
    const el = area.querySelector(`.message-row[data-id="${CSS.escape(id)}"]`);
    if (el) { el.scrollIntoView({ block: 'center' }); el.classList.add('flash'); setTimeout(() => el.classList.remove('flash'), 1200); }
  }
  area.addEventListener('click', e => {
    if (fired) { fired = false; return; }
    const row = e.target.closest('.message-row'); if (!row) return;
    const q = e.target.closest('.msg-quote'); if (q) return goto(q.dataset.goto);
    const im = e.target.closest('.msg-img'); if (im) return lightbox(im.src);
    if (e.target.closest('audio,video,a')) return;
    if (row.dataset.id) showMenu(row.dataset.id);
  });
  $('pin-banner').onclick = () => goto($('pin-banner').dataset.id);
  window.lightbox = url => { $('lb-img').src = url; open('lightbox'); };

  // ---------- cari di chat ----------
  window.toggleChatSearch = function () {
    const b = $('chat-search-bar'), on = b.style.display !== 'flex';
    b.style.display = on ? 'flex' : 'none';
    if (on) $('chat-search-input').focus(); else { chatSearchQuery = ''; $('chat-search-input').value = ''; renderMessages(); }
  };
  $('chat-search-input').addEventListener('input', e => { chatSearchQuery = e.target.value; renderMessages(); });

  // ---------- kirim foto, video, dokumen ----------
  // Foto dikecilkan lalu disimpan langsung di Firestore (tanpa Firebase Storage)
  function imgData(file, max, q) {
    return new Promise((res, rej) => {
      const im = new Image(), u = URL.createObjectURL(file);
      im.onload = () => {
        URL.revokeObjectURL(u);
        let m = max, ql = q, out = '';
        for (let i = 0; i < 8; i++) {
          const r = Math.min(1, m / Math.max(im.width, im.height)), c = document.createElement('canvas');
          c.width = Math.round(im.width * r); c.height = Math.round(im.height * r);
          c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
          out = c.toDataURL('image/jpeg', ql);
          if (out.length < 120000) break;
          if (ql > 0.5) ql -= 0.1; else m = Math.round(m * 0.8);
        }
        out.length < 400000 ? res(out) : rej(new Error('too big'));
      };
      im.onerror = rej; im.src = u;
    });
  }
  const failMsg = () => alert(tr('Could not process this photo.', 'Foto tidak bisa diproses.'));

  let pend = null;
  window.pickMedia = kind => { closeSheet(); $(kind === 'cam' ? 'cam-input' : 'media-input').click(); };
  ['media-input', 'cam-input'].forEach(id => $(id).addEventListener('change', e => { const f = e.target.files[0]; e.target.value = ''; if (f) preview(f); }));
  function preview(f) {
    if (!chatTarget()) return;
    if (!f.type.startsWith('image/')) { comingSoon(); return; }
    const url = URL.createObjectURL(f); pend = { file: f, url };
    $('mp-view').innerHTML = `<img src="${url}">`;
    $('mp-caption').value = ''; $('mp-send').disabled = false; open('media-preview');
  }
  window.cancelMedia = () => { if (pend) URL.revokeObjectURL(pend.url); pend = null; shut('media-preview'); $('mp-view').innerHTML = ''; };
  window.sendMedia = async function () {
    if (!pend) return; const btn = $('mp-send'); btn.disabled = true;
    try {
      const url = await imgData(pend.file, 800, 0.7);
      sendRich({ text: $('mp-caption').value.trim(), media: { type: 'image', url, name: pend.file.name, size: Math.round(url.length * 0.75) } });
      cancelMedia();
    } catch (e) { console.warn(e); failMsg(); btn.disabled = false; }
  };

  // ---------- story: teks, foto, video, privasi ----------
  const BGS = ['#e5484d', '#3b82f6', '#16a34a', '#a855f7', '#f59e0b', '#111827'];
  let sc = { mode: 'text', file: null, bg: BGS[0] };
  $('sc-bgs').innerHTML = BGS.map((c, i) => `<button type="button" class="${i ? '' : 'on'}" style="background:${c}" data-bg="${c}"></button>`).join('');
  $('sc-bgs').addEventListener('click', e => { const b = e.target.closest('[data-bg]'); if (!b) return; sc.bg = b.dataset.bg; $('sc-bgs').querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); $('sc-text').style.background = sc.bg; });
  window.setStoryMode = m => {
    sc.mode = m; $('sc-pane-text').style.display = m === 'text' ? 'block' : 'none'; $('sc-pane-media').style.display = m === 'media' ? 'block' : 'none';
    $('sc-tab-text').classList.toggle('on', m === 'text'); $('sc-tab-media').classList.toggle('on', m === 'media');
  };
  window.openStoryComposer = () => {
    sc.file = null; $('sc-text').value = ''; $('sc-text').style.background = sc.bg; $('sc-caption').value = ''; $('sc-preview').innerHTML = '';
    $('sc-post').disabled = false; $('sc-privacy').value = localStorage.getItem('orvexa_storyPrivacy') || 'all';
    setStoryMode('text'); open('story-compose');
  };
  window.closeStoryComposer = () => shut('story-compose');
  window.handleMyStoryClick = function () {
    storiesDb = G('storiesDb', {});
    if (storiesDb[currentUser.username]) openStoryViewer(currentUser.username); else openStoryComposer();
  };
  $('sc-file').addEventListener('change', e => {
    const fl = e.target.files[0]; e.target.value = ''; if (!fl) return;
    if (!fl.type.startsWith('image/')) return comingSoon();
    sc.file = fl; $('sc-preview').innerHTML = `<img src="${URL.createObjectURL(fl)}">`;
  });
  window.postStory = async function () {
    const btn = $('sc-post'), privacy = $('sc-privacy').value; btn.disabled = true;
    localStorage.setItem('orvexa_storyPrivacy', privacy);
    const n = new Date(), time = String(n.getHours()).padStart(2, '0') + ':' + String(n.getMinutes()).padStart(2, '0');
    const st = { img: '', caption: '', time, createdAt: Date.now(), views: [], likes: [], privacy };
    try {
      if (sc.mode === 'text') {
        const t = $('sc-text').value.trim(); if (!t) { btn.disabled = false; return; }
        st.type = 'text'; st.text = t.slice(0, 300); st.bg = sc.bg;
      } else {
        if (!sc.file) { btn.disabled = false; return; }
        st.type = 'image'; st.img = await imgData(sc.file, 900, 0.7); st.caption = $('sc-caption').value.trim();
      }
    } catch (e) { console.warn(e); failMsg(); btn.disabled = false; return; }
    storiesDb = G('storiesDb', {}); storiesDb[currentUser.username] = st; setStoredData('storiesDb', storiesDb);
    closeStoryComposer(); renderDashboard(); if ($('stories-tab-screen') && $('stories-tab-screen').classList.contains('active')) renderStoriesTab();
  };

  // viewer story: video & teks, privasi, balas story
  const _osv = openStoryViewer;
  openStoryViewer = function (u) {
    _osv(u);
    const st = G('storiesDb', {})[u]; if (!st) return;
    const c = $('story-img-container'); c.querySelectorAll('.sv-extra').forEach(x => x.remove());
    $('view-story-image').style.display = (st.type === 'video' || st.type === 'text') ? 'none' : '';
    if (st.type === 'video' && /^https:\/\//.test(st.video || '')) { const v = document.createElement('video'); v.className = 'sv-extra'; v.src = st.video; v.controls = true; v.autoplay = true; v.playsInline = true; c.appendChild(v); }
    else if (st.type === 'text') { const d = document.createElement('div'); d.className = 'sv-extra sv-text'; d.style.background = /^#[0-9a-f]{6}$/i.test(st.bg) ? st.bg : BGS[0]; d.textContent = st.text || ''; c.appendChild(d); }
    const mine = u === currentUser.username;
    $('story-reply-bar').style.display = mine ? 'none' : 'flex'; $('story-reply-input').value = '';
    if (mine) $('view-story-time').innerText += ' · ' + (st.privacy === 'friends' ? tr('Contacts only', 'Hanya kontak') : tr('Everyone', 'Semua orang'));
  };
  const _csv = closeStoryViewer;
  closeStoryViewer = function () { document.querySelectorAll('#story-img-container .sv-extra').forEach(x => { if (x.pause) x.pause(); x.remove(); }); _csv(); };
  window.sendStoryReply = function () {
    const inp = $('story-reply-input'), t = inp.value.trim(), u = currentViewingStoryUser; if (!t || !u) return;
    const target = userOf(u); if (!target) return;
    const st = G('storiesDb', {})[u] || {}, kind = st.type === 'video' ? tr('Video story', 'Story video') : st.type === 'text' ? '"' + (st.text || '').slice(0, 40) + '"' : tr('Photo story', 'Story foto');
    if (sendRich({ text: t, replyTo: { id: '', sender: u, text: 'Story · ' + kind, story: true } }, target)) { inp.value = ''; closeStoryViewer(); toast(tr('Reply sent', 'Balasan terkirim')); }
  };

  // ---------- profil saya ----------
  window.openBio = () => { const u = userOf(me()) || {}; $('bio-input').value = u.bio || ''; open('bio-modal'); };
  window.closeBio = () => shut('bio-modal');
  window.setBioChip = el => { $('bio-input').value = el.textContent; };
  window.saveBio = () => {
    const b = $('bio-input').value.trim().slice(0, 80), list = G('users', []), u = list.find(x => x.username === me());
    if (u) { u.bio = b; setStoredData('users', list); }
    shut('bio-modal'); renderSettingsTab();
  };
  function storyPreview() {
    const st = G('storiesDb', {})[me()], el = $('pf-story');
    if (!st) { el.innerHTML = `<div class="pf-story-empty"><i class="fa-solid fa-plus"></i> ${tr('Tap to add a story', 'Ketuk untuk membuat story')}</div>`; return; }
    const left = Math.max(0, 24 - Math.floor((Date.now() - st.createdAt) / 3600000));
    const th = st.type === 'text' ? `<div class="pf-st-th" style="background:${/^#[0-9a-f]{6}$/i.test(st.bg) ? st.bg : BGS[0]}">Aa</div>`
      : st.type === 'video' && /^https:\/\//.test(st.video || '') ? `<video class="pf-st-th" src="${esc(st.video)}#t=0.1" muted preload="metadata"></video>`
      : `<img class="pf-st-th" src="${esc(okSrc(st.img))}">`;
    el.innerHTML = th + `<div class="pf-st-meta"><b>${esc(st.caption || st.text || tr('Active story', 'Story aktif'))}</b><small>${(st.views || []).length} ${tr('views', 'penonton')} · ${tr('ends in ', 'berakhir ')}${left}${tr('h', ' jam')}</small></div>`;
  }
  const _rst2 = renderSettingsTab;
  renderSettingsTab = function () {
    _rst2(); if (!currentUser) return;
    const u = userOf(me()) || currentUser, f = (G('friendsDb', {})[me()] || []), c = G('chatsDb', {});
    $('pf-bio').textContent = u.bio || tr('No bio yet', 'Belum ada bio');
    $('pf-joined').textContent = fmtJoined(u.joinedAt);
    $('st-story').textContent = G('storiesDb', {})[me()] ? 1 : 0;
    $('st-contacts').textContent = f.length;
    $('st-chats').textContent = f.filter(x => (c[getChatRoomId(me(), x)] || []).length).length;
    storyPreview();
  };

  // ---------- info users ----------
  $('ui-media').addEventListener('click', e => { if (e.target.tagName === 'IMG') lightbox(e.target.src); });
  const _fui = window.fillUserInfo;
  window.fillUserInfo = function () {
    _fui(); const t = chatTarget(); if (!t) return;
    const u = userOf(t); if (!u) return;
    $('ui-bio').textContent = u.bio || ''; $('ui-bio').style.display = u.bio ? 'block' : 'none';
    $('ui-joined').textContent = fmtJoined(u.joinedAt);
    $('ui-status').textContent = u.isOnline ? 'Online' : (u.lastSeen ? tr('Last seen ', 'Terakhir dilihat ') + fmtSeen(u.lastSeen) : '-');
    $('ui-id').textContent = u.uid || '-';
    $('ui-role').style.display = t === 'risky.err' ? 'inline-block' : 'none';
    const ms = (G('chatsDb', {})[getChatRoomId(me(), t)] || []).filter(m => !m.deleted);
    const imgs = ms.filter(m => m.media && m.media.type === 'image' && okSrc(m.media.url)), vn = ms.filter(m => m.audio && /^data:audio\//.test(m.audio));
    $('ui-media-count').textContent = imgs.length + ' ' + tr('photos', 'foto') + ' · ' + vn.length + ' voice note';
    $('ui-media').innerHTML = imgs.slice(-12).reverse().map(m => `<img src="${esc(m.media.url)}">`).join('');
    $('ui-vns').innerHTML = vn.slice(-5).reverse().map(m => `<div class="ui-vn"><span>${esc(m.time || '')}</span><audio controls preload="none" src="${esc(m.audio)}"></audio></div>`).join('');
  };
  const REASONS = [['Spam', 'Spam', 'Spam'], ['Harassment', 'Harassment', 'Pelecehan'], ['Scam', 'Scam / fraud', 'Penipuan'], ['Inappropriate', 'Inappropriate content', 'Konten tidak pantas'], ['Other', 'Other', 'Lainnya']];
  let rpReason = '';
  const rpLabel = r => currentLang === 'id' ? r[2] : r[1];
  const rpDraw = () => {
    const sel = REASONS.find(r => r[0] === rpReason);
    $('rp-sel-text').textContent = sel ? rpLabel(sel) : tr('Choose a reason', 'Pilih alasan');
    $('rp-sel-btn').classList.toggle('chosen', !!sel);
    $('rp-reasons').innerHTML = REASONS.map(r => `<button type="button" data-r="${r[0]}" class="${rpReason === r[0] ? 'on' : ''}"><span>${rpLabel(r)}</span>${rpReason === r[0] ? '<i class="fa-solid fa-check"></i>' : ''}</button>`).join('');
  };
  window.toggleRpSelect = () => $('rp-select').classList.toggle('open');
  $('rp-reasons').addEventListener('click', e => { const b = e.target.closest('[data-r]'); if (b) { rpReason = b.dataset.r; rpDraw(); $('rp-select').classList.remove('open'); } });
  $('rp-note').addEventListener('input', () => { $('rp-count').textContent = $('rp-note').value.length + '/300'; });
  window.openReport = () => {
    const t = chatTarget(); if (!t) return; const u = userOf(t) || {};
    rpReason = ''; rpDraw(); $('rp-select').classList.remove('open'); $('rp-note').value = ''; $('rp-count').textContent = '0/300';
    $('rp-avatar').src = u.avatar || ''; $('rp-name').textContent = u.name || t; $('rp-username').textContent = '@' + t; open('report-modal');
  };
  window.closeReport = () => shut('report-modal');
  window.submitReport = () => {
    const t = chatTarget(); if (!t) return;
    if (!rpReason) { toast(tr('Choose a reason first', 'Pilih alasan dulu')); return; }
    const tu = userOf(t) || {};
    window.orvexaReport({ reporter: me(), target: t, targetUid: tu.uid || '', reason: rpReason, note: $('rp-note').value.trim().slice(0, 300), ts: Date.now(), status: 'open' });
    shut('report-modal'); toast(tr('Report sent. Thank you.', 'Laporan terkirim. Terima kasih.'));
  };
})();

/* ===== blok JS 7 ===== */
/* ORVEXA: banner & bingkai foto profil (tersimpan di akun, terlihat di semua device/akun) */
(function () {
  const $ = id => document.getElementById(id), G = getStoredData, tr = (en, idn) => currentLang === 'id' ? idn : en;
  const me = () => currentUser.username;
  const userOf = n => G('users', []).find(x => x.username === n);
  const FRAMES = ['gold', 'silver', 'neon', 'rainbow', 'fire', 'purple', 'emerald', 'pink'];
  const FRAME_NAMES = { gold: ['Gold', 'Emas'], silver: ['Silver', 'Perak'], neon: ['Neon', 'Neon'], rainbow: ['Rainbow', 'Pelangi'], fire: ['Fire', 'Api'], purple: ['Purple', 'Ungu'], emerald: ['Emerald', 'Zamrud'], pink: ['Pink', 'Merah Muda'] };
  const GRADS = [
    'linear-gradient(135deg,#e5484d,#7c2d12)', 'linear-gradient(135deg,#3b82f6,#1e1b4b)', 'linear-gradient(135deg,#16a34a,#064e3b)',
    'linear-gradient(135deg,#a855f7,#312e81)', 'linear-gradient(135deg,#f59e0b,#9a3412)', 'linear-gradient(135deg,#334155,#0f172a)'
  ];
  const DEFAULT_BG = 'linear-gradient(135deg,color-mix(in srgb,var(--accent-color) 45%,var(--bg-card)),var(--bg-card))';
  const okBanner = v => /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+\/=]+$/.test(v || '') || /^g[0-5]$/.test(v || '');
  const okFrame = v => FRAMES.includes(v);

  function bannerCss(v) {
    if (/^g[0-5]$/.test(v || '')) return GRADS[+v[1]];
    if (okBanner(v)) return 'url("' + v + '")';
    return DEFAULT_BG;
  }
  function paintBanner(el, v, pos) { el.style.backgroundImage = bannerCss(v); el.style.backgroundPosition = '50% ' + (typeof pos === 'number' ? pos : 50) + '%'; }
  function paintFrame(img, v) {
    FRAMES.forEach(f => img.classList.remove('fr-' + f));
    if (okFrame(v)) img.classList.add('fr-' + v);
  }

  // ---------- simpan ke akun (ikut sync Firestore lewat setStoredData('users')) ----------
  function saveField(k, v) { saveFields({ [k]: v }); }
  function saveFields(o) {
    const list = G('users', []), u = list.find(x => x.username === me());
    if (!u) return;
    Object.assign(u, o); setStoredData('users', list);
    if (currentUser) { Object.assign(currentUser, o); setStoredData('currentUser', currentUser); }
  }

  // ---------- elemen baru ----------
  const pfMe = document.querySelector('#settings-tab-screen .pf-me');
  const pfBanner = document.createElement('div'); pfBanner.className = 'pf-banner'; pfBanner.id = 'pf-banner';
  pfMe.parentNode.insertBefore(pfBanner, pfMe); pfMe.classList.add('has-banner');

  const uiAvatar = $('ui-avatar');
  const uiBanner = document.createElement('div'); uiBanner.className = 'ui-banner'; uiBanner.id = 'ui-banner';
  uiAvatar.parentNode.insertBefore(uiBanner, uiAvatar); uiAvatar.classList.add('has-banner');

  // item di sheet Edit
  const editCard = document.querySelector('#sheet-edit .settings-card');
  function addItem(icon, en, idn, fn) {
    const d = document.createElement('div'); d.className = 'settings-item'; d.onclick = fn;
    d.innerHTML = '<div class="settings-item-left"><i class="fa-solid ' + icon + '"></i> <span data-en="' + en + '" data-id="' + idn + '">' + tr(en, idn) + '</span></div><i class="fa-solid fa-chevron-right" style="font-size:.85em;color:var(--text-muted)"></i>';
    editCard.insertBefore(d, editCard.children[4] || null);
    return d;
  }
  addItem('fa-palette', 'Profile Frame', 'Bingkai Foto Profil', () => { closeSheet(); openFrame(); });
  addItem('fa-image', 'Profile Banner', 'Banner Profil', () => { closeSheet(); openBanner(); });

  // sheet banner & bingkai
  const sheets = document.createElement('div');
  sheets.innerHTML =
    '<div class="sheet-overlay" id="sheet-banner" onclick="closeSheet(event)"><div class="sheet"><div class="sheet-handle"></div>' +
    '<div class="sheet-title" data-en="Profile Banner" data-id="Banner Profil">Profile Banner</div>' +
    '<div class="pf-banner" id="bn-preview"></div>' +
    '<p class="adm-muted" id="bn-hint" style="display:none;margin-top:8px;text-align:center" data-en="Drag the photo to adjust its position" data-id="Geser foto untuk mengatur posisinya">Drag the photo to adjust its position</p>' +
    '<div class="rp-label" style="margin-top:14px" data-en="Colors" data-id="Warna">Colors</div>' +
    '<div class="bn-gradients" id="bn-grads"></div>' +
    '<button type="button" class="btn-secondary" style="margin-top:4px" onclick="document.getElementById(\'bn-file\').click()" data-en="Choose photo" data-id="Pilih foto">Choose photo</button>' +
    '<button type="button" class="btn-secondary" onclick="removeBanner()" data-en="Remove banner" data-id="Hapus banner">Remove banner</button>' +
    '</div></div>' +
    '<div class="sheet-overlay" id="sheet-frame" onclick="closeSheet(event)"><div class="sheet"><div class="sheet-handle"></div>' +
    '<div class="sheet-title" data-en="Profile Frame" data-id="Bingkai Foto Profil">Profile Frame</div>' +
    '<div class="fr-grid" id="fr-grid"></div></div></div>' +
    '<input type="file" id="bn-file" accept="image/*" style="display:none">';
  while (sheets.firstChild) document.body.appendChild(sheets.firstChild);

  // ---------- banner ----------
  let nat = null;
  function curUser() { return userOf(me()) || currentUser || {}; }
  function drawBannerSheet() {
    const cu = curUser(), v = cu.banner || '';
    paintBanner($('bn-preview'), v, cu.bpos);
    $('bn-hint').style.display = /^data:image/.test(v) ? 'block' : 'none';
    nat = null;
    if (/^data:image/.test(v)) { const im = new Image(); im.onload = () => { nat = { w: im.width, h: im.height }; }; im.src = v; }
    $('bn-grads').innerHTML = GRADS.map((g, i) => '<button type="button" data-g="g' + i + '" class="' + (v === 'g' + i ? 'on' : '') + '" style="background:' + g + '"></button>').join('');
  }
  window.openBanner = () => { drawBannerSheet(); openSheet('sheet-banner'); };
  window.removeBanner = () => { saveFields({ banner: '', bpos: 50 }); drawBannerSheet(); renderSettingsTab(); };
  $('bn-grads').addEventListener('click', e => {
    const b = e.target.closest('[data-g]'); if (!b) return;
    saveFields({ banner: b.dataset.g, bpos: 50 }); drawBannerSheet(); renderSettingsTab();
  });
  // banner foto: lebar 720px, tinggi mengikuti foto (3:1 sampai 1:1) agar bisa digeser naik/turun
  function bannerData(file) {
    return new Promise((res, rej) => {
      const im = new Image(), u = URL.createObjectURL(file);
      im.onload = () => {
        URL.revokeObjectURL(u);
        let w = 720, ql = 0.7, out = '';
        for (let i = 0; i < 8; i++) {
          const h = Math.min(w, Math.max(Math.round(w / 3), Math.round(w * im.height / im.width)));
          const c = document.createElement('canvas'); c.width = w; c.height = h;
          const s = Math.max(w / im.width, h / im.height), dw = im.width * s, dh = im.height * s;
          c.getContext('2d').drawImage(im, (w - dw) / 2, (h - dh) / 2, dw, dh);
          out = c.toDataURL('image/jpeg', ql);
          if (out.length < 110000) break;
          if (ql > 0.45) ql -= 0.1; else w = Math.round(w * 0.8);
        }
        out.length < 240000 ? res(out) : rej(new Error('too big'));
      };
      im.onerror = rej; im.src = u;
    });
  }
  $('bn-file').addEventListener('change', async e => {
    const f = e.target.files[0]; e.target.value = ''; if (!f) return;
    if (!f.type.startsWith('image/')) return;
    try { saveFields({ banner: await bannerData(f), bpos: 50 }); drawBannerSheet(); renderSettingsTab(); }
    catch (x) { console.warn(x); alert(tr('Could not process this photo.', 'Foto tidak bisa diproses.')); }
  });

  // geser posisi foto banner (vertikal) di preview
  const prev = $('bn-preview');
  let drag = null;
  prev.addEventListener('pointerdown', e => {
    const u = curUser(); if (!/^data:image/.test(u.banner || '') || !nat) return;
    const r = prev.getBoundingClientRect(), over = r.width * nat.h / nat.w - r.height; if (over <= 1) return;
    drag = { y: e.clientY, pos: typeof u.bpos === 'number' ? u.bpos : 50, over, cur: null };
    prev.setPointerCapture(e.pointerId);
  });
  prev.addEventListener('pointermove', e => {
    if (!drag) return;
    const p = Math.max(0, Math.min(100, drag.pos - (e.clientY - drag.y) / drag.over * 100));
    drag.cur = p; prev.style.backgroundPosition = '50% ' + p + '%';
  });
  function endDrag() {
    if (!drag) return; const p = drag.cur; drag = null;
    if (typeof p === 'number') { saveField('bpos', Math.round(p)); renderSettingsTab(); }
  }
  ['pointerup', 'pointercancel'].forEach(ev => prev.addEventListener(ev, endDrag));

  // ---------- bingkai ----------
  function drawFrameSheet() {
    const u = curUser(), v = u.frame || '', av = esc(okSrc(u.avatar) || '');
    const opt = (id, name) => '<button type="button" class="fr-opt ' + (v === id ? 'on' : '') + '" data-f="' + id + '"><img src="' + av + '" class="' + (id ? 'fr-' + id : '') + '"><span>' + name + '</span></button>';
    $('fr-grid').innerHTML = opt('', tr('None', 'Tanpa')) + FRAMES.map(f => opt(f, FRAME_NAMES[f][currentLang === 'id' ? 1 : 0])).join('');
  }
  window.openFrame = () => { drawFrameSheet(); openSheet('sheet-frame'); };
  $('fr-grid').addEventListener('click', e => {
    const b = e.target.closest('[data-f]'); if (!b) return;
    saveField('frame', b.dataset.f); drawFrameSheet(); renderSettingsTab();
  });

  // ---------- tampilkan di Profil Saya ----------
  const _rst = renderSettingsTab;
  renderSettingsTab = function () {
    _rst(); if (!currentUser) return;
    const u = curUser();
    paintBanner($('pf-banner'), u.banner || '', u.bpos);
    paintFrame($('settings-user-avatar'), u.frame || '');
  };

  // ---------- tampilkan di Info users (profil orang lain, ikut realtime) ----------
  const _fui = window.fillUserInfo;
  window.fillUserInfo = function () {
    _fui();
    const t = (activeChatUser && !isSystemChat && activeChatUser.username) ? activeChatUser.username : null; if (!t) return;
    const u = userOf(t) || {};
    paintBanner($('ui-banner'), u.banner || '', u.bpos);
    paintFrame($('ui-avatar'), u.frame || '');
  };
})();

/* ===== blok JS 8 ===== */
/* ORVEXA v3: connection, blokir+laporan, tanggal bergabung, OrVexa ID privat, log-in cepat, bio di chat */
(function () {
  const $ = id => document.getElementById(id), G = getStoredData, tr = (en, idn) => currentLang === 'id' ? idn : en;
  const DEV = 'risky.err', me = () => currentUser && currentUser.username, isDev = () => me() === DEV;
  const userOf = n => G('users', []).find(x => x.username === n);
  const target = () => (activeChatUser && !isSystemChat && activeChatUser.username) ? activeChatUser.username : null;
  const fullDate = ms => ms ? new Date(ms).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : '-';
  const say = m => { if (window.toast) window.toast(m); };

  // ---------- Info users: blokir di sebelah laporan ----------
  const rep = document.querySelector('#user-info-screen .ui-report'), blk = $('ui-block-btn');
  const danger = document.createElement('div'); danger.className = 'ui-danger';
  rep.parentNode.insertBefore(danger, rep); danger.appendChild(blk); danger.appendChild(rep);

  // ---------- Info users: Connection (kontak yang sama) ----------
  const mediaSec = $('ui-media-count').parentNode;
  const cSec = document.createElement('div'); cSec.className = 'pf-sec'; cSec.setAttribute('data-en', 'Connection'); cSec.setAttribute('data-id', 'Koneksi'); cSec.textContent = tr('Connection', 'Koneksi');
  const cWrap = document.createElement('div'); cWrap.className = 'cn-wrap'; cWrap.id = 'ui-conn'; cWrap.dataset.open = '0';
  mediaSec.parentNode.insertBefore(cSec, mediaSec); mediaSec.parentNode.insertBefore(cWrap, mediaSec);
  cWrap.addEventListener('click', e => { if (e.target.closest('.cn-tap')) { cWrap.dataset.open = cWrap.dataset.open === '1' ? '0' : '1'; renderConn(); } });

  function renderConn() {
    const t = target(); if (!t || !currentUser) return;
    const fr = G('friendsDb', {}), a = fr[me()] || [], b = fr[t] || [];
    const list = a.filter(x => b.includes(x) && x !== t && x !== me()).map(userOf).filter(Boolean);
    const open = cWrap.dataset.open === '1' && list.length;
    cWrap.classList.toggle('open', !!open);
    if (!list.length) {
      cWrap.innerHTML = '<div class="cn-card"><div class="cn-txt"><span>' + esc(tr('No mutual contacts yet', 'Belum ada kontak yang sama')) + '</span></div></div>';
      return;
    }
    const n = list.length;
    const stack = list.slice(0, 4).map(u => '<img src="' + esc(okSrc(u.avatar)) + '">').join('');
    const names = list.slice(0, 3).map(u => esc(u.name)).join(', ') + (n > 3 ? ' +' + (n - 3) : '');
    cWrap.innerHTML = '<div class="cn-card cn-tap"><div class="cn-stack">' + stack + '</div><div class="cn-txt"><b>' + n + ' ' + esc(tr(n === 1 ? 'mutual contact' : 'mutual contacts', 'kontak yang sama')) + '</b><span>' + names + '</span></div><i class="fa-solid fa-chevron-right cn-chev"></i></div>' +
      (open ? '<div class="cn-list">' + list.map(u => '<div class="cn-row"><img src="' + esc(okSrc(u.avatar)) + '"><div><b>' + esc(u.name) + vb(u.username) + '</b><span>@' + esc(u.username) + '</span></div></div>').join('') + '</div>' : '');
  }

  const _ou = window.openUserInfo;
  window.openUserInfo = function () { cWrap.dataset.open = '0'; _ou(); };

  const _fui = window.fillUserInfo;
  window.fillUserInfo = function () {
    _fui(); const t = target(); if (!t) return;
    const u = userOf(t) || {};
    $('ui-joined').textContent = fullDate(u.joinedAt);
    // OrVexa ID hanya terlihat oleh pemilik (di Profil Saya) dan Dev
    const row = $('ui-id').closest('.pf-item');
    if (isDev()) row.style.display = ''; else { row.style.display = 'none'; $('ui-id').textContent = ''; }
    renderConn();
  };

  // ---------- Profil Saya: tanggal bergabung & OrVexa ID bisa disembunyikan ----------
  const idEl = $('pf-id'), idRow = idEl.closest('.pf-item');
  idRow.removeAttribute('onclick'); idRow.onclick = null;
  const txt = idRow.querySelector('.pf-txt');
  const hint = document.createElement('span'); hint.className = 'pf-hint'; hint.setAttribute('data-en', 'Quick Login code · keep it private'); hint.setAttribute('data-id', 'Kode Log-in Cepat · jangan dibagikan'); hint.textContent = tr('Quick Login code · keep it private', 'Kode Log-in Cepat · jangan dibagikan');
  txt.appendChild(hint);
  const eye = document.createElement('button'); eye.type = 'button'; eye.className = 'pf-eyebtn'; eye.innerHTML = '<i class="fa-solid fa-eye"></i>';
  idRow.insertBefore(eye, idRow.querySelector('.pf-copy'));
  let idShown = false, idReal = '';
  function drawId() {
    idEl.textContent = idShown ? (idReal || '-') : '•'.repeat(14);
    eye.firstChild.className = 'fa-solid ' + (idShown ? 'fa-eye-slash' : 'fa-eye');
  }
  eye.addEventListener('click', e => { e.stopPropagation(); idShown = !idShown; drawId(); });
  idRow.addEventListener('click', e => {
    if (e.target.closest('.pf-eyebtn') || !idReal) return;
    if (navigator.clipboard) navigator.clipboard.writeText(idReal).catch(() => {});
    const ic = idRow.querySelector('.pf-copy'); ic.className = 'fa-solid fa-check pf-copy'; setTimeout(() => ic.className = 'fa-regular fa-copy pf-copy', 1200);
  });
  const _rst = renderSettingsTab;
  renderSettingsTab = function () {
    _rst(); if (!currentUser) return;
    const u = userOf(me()) || currentUser;
    $('pf-joined').textContent = fullDate(u.joinedAt);
    idReal = currentUser.uid || u.uid || ''; drawId();
  };
  const _lo = window.handleLogOut;
  window.handleLogOut = function () { idShown = false; idReal = ''; return _lo.apply(this, arguments); };

  // ---------- bio di bawah nama pada header chat ----------
  const bio = document.createElement('div'); bio.id = 'chat-header-bio'; bio.className = 'chat-header-bio'; bio.style.display = 'none';
  $('active-chat-status').parentNode.appendChild(bio);
  function drawBio() {
    const t = target(), u = t ? userOf(t) : null, b = u && u.bio ? u.bio : '';
    bio.textContent = b; bio.style.display = b ? 'block' : 'none';
  }
  const _rm = renderMessages;
  renderMessages = function () { _rm(); drawBio(); };

  // ---------- Sign In: menu titik tiga -> Log-in Cepat ----------
  const si = $('signin-screen');
  const dots = document.createElement('button'); dots.type = 'button'; dots.className = 'si-dots'; dots.setAttribute('aria-label', 'Menu'); dots.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
  const menu = document.createElement('div'); menu.className = 'si-menu';
  menu.innerHTML = '<button type="button" class="si-menu-item"><i class="fa-solid fa-fingerprint"></i><span data-en="Quick Login" data-id="Log-in Cepat">' + tr('Quick Login', 'Log-in Cepat') + '</span></button>';
  si.appendChild(dots); si.appendChild(menu);
  dots.addEventListener('click', e => { e.stopPropagation(); menu.classList.toggle('open'); });
  document.addEventListener('click', () => menu.classList.remove('open'));
  menu.querySelector('.si-menu-item').addEventListener('click', () => { menu.classList.remove('open'); openQuick(); });

  const qm = document.createElement('div'); qm.className = 'modal-overlay'; qm.id = 'ql-modal';
  qm.innerHTML =
    '<div class="modal-card">' +
    '<div class="rp-head"><span class="rp-ico"><i class="fa-solid fa-fingerprint"></i></span><div><h3 class="modal-title" data-en="Quick Login" data-id="Log-in Cepat">' + tr('Quick Login', 'Log-in Cepat') + '</h3>' +
    '<p class="rp-sub" data-en="Sign in with your OrVexa ID." data-id="Masuk dengan OrVexa ID kamu.">' + tr('Sign in with your OrVexa ID.', 'Masuk dengan OrVexa ID kamu.') + '</p></div></div>' +
    '<div class="form-group"><label>OrVexa ID</label><input type="text" id="ql-id" autocomplete="off" autocapitalize="off" spellcheck="false" data-en="Paste your OrVexa ID" data-id="Tempel OrVexa ID kamu" placeholder="' + tr('Paste your OrVexa ID', 'Tempel OrVexa ID kamu') + '"></div>' +
    '<div class="form-group"><label data-i18n="label_password">Password</label><div class="input-wrapper"><input type="password" id="ql-pass" placeholder="Password"><i class="fa-regular fa-eye toggle-password" onclick="togglePassword(\'ql-pass\', this)"></i></div></div>' +
    '<p id="ql-error" class="log-error" style="font-size:.9em;margin-bottom:12px;display:none"></p>' +
    '<button type="button" class="btn-primary" id="ql-go" onclick="quickLogin()" data-i18n="btn_signin">Sign In</button>' +
    '<button type="button" class="btn-secondary" style="margin-top:10px" onclick="closeQuick()" data-i18n="btn_cancel">Cancel</button>' +
    '</div>';
  document.body.appendChild(qm);
  if (window.applyLanguage) { try { applyLanguage(currentLang); } catch (e) {} }

  window.openQuick = () => { $('ql-id').value = ''; $('ql-pass').value = ''; $('ql-error').style.display = 'none'; $('ql-go').disabled = false; qm.classList.add('active'); setTimeout(() => $('ql-id').focus(), 50); };
  window.closeQuick = () => { qm.classList.remove('active'); $('ql-pass').value = ''; };
  window.quickLogin = async function () {
    const idv = $('ql-id').value.trim(), pass = $('ql-pass').value, err = $('ql-error'), btn = $('ql-go');
    const fail = m => { err.textContent = m; err.style.display = 'block'; };
    err.style.display = 'none';
    if (!idv || !pass) return fail(tr('Enter your OrVexa ID and password.', 'Masukkan OrVexa ID dan password.'));
    btn.disabled = true;
    try {
      const s = await window.orvexaDb.collection('usernames').where('uid', '==', idv).limit(1).get();
      if (s.empty) { btn.disabled = false; return fail(tr('OrVexa ID not found or password incorrect.', 'OrVexa ID tidak ditemukan atau password salah.')); }
      const email = s.docs[0].data().email;
      closeQuick();
      $('signin-username').value = email; $('signin-pass').value = pass;
      await window.handleSignIn({ preventDefault() {} });
    } catch (e) {
      console.warn(e);
      fail(e && e.code === 'permission-denied' ? tr('Quick Login is not enabled on the server yet.', 'Log-in Cepat belum diaktifkan di server.') : tr('Quick Login failed. Try again.', 'Log-in Cepat gagal. Coba lagi.'));
    }
    btn.disabled = false;
  };
})();

/* ===== blok JS 9 ===== */
/* ORVEXA: notifikasi update log, saran fitur, keluhan */
(function () {
  const $ = id => document.getElementById(id), G = getStoredData, tr = (en, idn) => currentLang === 'id' ? idn : en;
  const open = n => $(n).classList.add('active'), shut = n => $(n).classList.remove('active');
  const upd = () => G('updatesDb', []), seen = () => +localStorage.getItem('orvexa_updSeen') || 0;
  let since = 0;

  const pick = (u, k) => u[k + '_' + currentLang] || u[k] || '';
  function drawNotif() {
    const a = upd();
    $('nf-list').innerHTML = a.length ? a.map(u => `<div class="nf-card${u.ts > since ? ' new' : ''}"><div class="nf-head"><b>${esc(pick(u, 'title'))}</b><span>${new Date(u.ts).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span></div><p>${esc(pick(u, 'body')).replace(/\n/g, '<br>')}</p></div>`).join('')
      : `<p class="nf-empty">${tr('No updates yet.', 'Belum ada update.')}</p>`;
  }
  window.bellUpdate = function () {
    const b = $('bell-badge'); if (!b) return;
    const n = upd().filter(u => u.ts > seen()).length;
    b.style.display = n ? 'flex' : 'none'; b.textContent = n > 9 ? '9+' : n;
    if ($('sheet-notif').classList.contains('active')) drawNotif();
  };
  window.openNotif = () => {
    since = seen(); drawNotif(); open('sheet-notif');
    localStorage.setItem('orvexa_updSeen', String(Math.max(seen(), ...upd().map(u => u.ts), 0)));
    $('bell-badge').style.display = 'none';
  };
  window.closeFx = n => shut(n);

  // rate limit ringan supaya tidak spam
  const wait = () => { const t = +localStorage.getItem('orvexa_lastTicket') || 0; if (Date.now() - t < 30000) { toast(tr('Please wait a moment before sending again.', 'Tunggu sebentar sebelum mengirim lagi.')); return true; } return false; };
  const stamp = () => localStorage.setItem('orvexa_lastTicket', String(Date.now()));

  const sugOpen = () => { const c = G('configDb', {}); return !(c.suggestions && c.suggestions.open === false); };
  window.openSuggest = () => {
    const o = sugOpen();
    $('sg-closed').style.display = o ? 'none' : 'block'; $('sg-form').style.display = o ? 'block' : 'none'; $('sg-send').style.display = o ? '' : 'none';
    $('sg-text').value = ''; $('sg-count').textContent = '0/300'; open('suggest-modal');
  };
  $('sg-text').addEventListener('input', () => { $('sg-count').textContent = $('sg-text').value.length + '/300'; });
  window.sendSuggest = () => {
    if (!sugOpen()) return;
    const t = $('sg-text').value.trim();
    if (!t) return toast(tr('Write your idea first.', 'Tulis idemu dulu.'));
    if (wait()) return;
    window.orvexaSuggest({ from: currentUser.username, text: t.slice(0, 300), ts: Date.now(), status: 'new' });
    stamp(); shut('suggest-modal'); toast(tr('Thanks for your suggestion!', 'Terima kasih atas sarannya!'));
  };

  const TYPES = [['Bug', 'Bug', 'Bug'], ['UI', 'Display', 'Tampilan'], ['Other', 'Other', 'Lainnya']];
  let cpType = 'Bug';
  const cpDraw = () => { $('cp-types').innerHTML = TYPES.map(t => `<button type="button" data-t="${t[0]}" class="${cpType === t[0] ? 'on' : ''}">${currentLang === 'id' ? t[2] : t[1]}</button>`).join(''); };
  $('cp-types').addEventListener('click', e => { const b = e.target.closest('[data-t]'); if (b) { cpType = b.dataset.t; cpDraw(); } });
  $('cp-text').addEventListener('input', () => { $('cp-count').textContent = $('cp-text').value.length + '/500'; });
  window.openComplain = () => { cpType = 'Bug'; cpDraw(); $('cp-text').value = ''; $('cp-count').textContent = '0/500'; open('complain-modal'); };
  window.sendComplain = () => {
    const t = $('cp-text').value.trim();
    if (!t) return toast(tr('Describe the problem first.', 'Jelaskan masalahnya dulu.'));
    if (wait()) return;
    window.orvexaComplain({ from: currentUser.username, type: cpType, text: t.slice(0, 500), ua: navigator.userAgent.slice(0, 160), screen: (document.querySelector('.screen.active') || {}).id || '', lang: currentLang, ts: Date.now(), status: 'open' });
    stamp(); shut('complain-modal'); toast(tr('Report sent. Thank you!', 'Laporan terkirim. Terima kasih!'));
  };
  bellUpdate();
})();

/* ===== blok JS 10 ===== */
/* ORVEXA: label kustom (dikelola di Admin Panel) & tautan sosmed */
(function () {
  const $ = id => document.getElementById(id), G = getStoredData, tr = (en, idn) => currentLang === 'id' ? idn : en;
  const me = () => currentUser && currentUser.username;
  const userOf = n => G('users', []).find(x => x.username === n);
  const say = m => { if (window.toast) window.toast(m); };

  // ================= LABEL =================
  const ICONS = ['crown', 'code', 'shield-halved', 'star', 'heart', 'bolt', 'fire', 'gem', 'rocket', 'leaf', 'headset', 'check'];
  const STYLES = ['solid', 'soft', 'outline'];
  const DEFAULT = { id: 'dev', text: 'DEV', color: '#e5484d', style: 'solid', icon: 'code' };
  const okColor = c => /^#[0-9a-f]{6}$/i.test(c || '') ? c : '#e5484d';
  const clean = l => ({ id: String(l.id || '').replace(/[^a-z0-9_-]/gi, '').slice(0, 24), text: String(l.text || '').slice(0, 14), color: okColor(l.color), style: STYLES.includes(l.style) ? l.style : 'solid', icon: ICONS.includes(l.icon) ? l.icon : '' });
  const cfg = () => { const l = (G('configDb', {}) || {}).labels || {}; return { list: Array.isArray(l.list) ? l.list : [], assign: Array.isArray(l.assign) ? l.assign : [] }; };
  const defs = () => { const l = cfg().list.map(clean).filter(x => x.id && x.text); if (!l.some(x => x.id === 'dev')) l.unshift({ ...DEFAULT }); return l; };
  const assigned = u => { const a = cfg().assign.find(x => x && x.u === u); if (a) return Array.isArray(a.l) ? a.l : []; return u === 'risky.err' ? ['dev'] : []; };
  const lum = c => { const n = parseInt(c.slice(1), 16), f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return .2126 * f(n >> 16 & 255) + .7152 * f(n >> 8 & 255) + .0722 * f(n & 255); };
  const pill = l => { const c = clean(l); return '<span class="olb ' + c.style + '" style="--lb:' + c.color + ';--lb-fg:' + (lum(c.color) > .5 ? '#111' : '#fff') + '">' + (c.icon ? '<i class="fa-solid fa-' + c.icon + '"></i>' : '') + '<span>' + esc(c.text || 'LABEL') + '</span></span>'; };
  const html = u => { const d = defs(); return assigned(u).map(id => d.find(l => l.id === id)).filter(Boolean).map(pill).join(''); };
  window.lb = { defs, assigned, pill, html, cfg, ICONS, STYLES, DEFAULT };
  window.lbHtml = html;

  // container label di Profil Saya dan Info users
  const mk = (after, id) => { const s = document.createElement('span'); s.id = id; s.className = 'lb-wrap'; after.parentNode.insertBefore(s, after.nextSibling); return s; };
  mk($('pf-role'), 'pf-labels'); mk($('ui-role'), 'ui-labels');

  // ================= SOSMED =================
  const P = {
    tiktok: { name: 'TikTok', icon: 'fa-brands fa-tiktok', cls: 'soc-tt' },
    instagram: { name: 'Instagram', icon: 'fa-brands fa-instagram', cls: 'soc-ig' },
    whatsapp: { name: 'WhatsApp', icon: 'fa-brands fa-whatsapp', cls: 'soc-wa' }
  };
  const HANDLE = { tiktok: /^[A-Za-z0-9._]{2,24}$/, instagram: /^[A-Za-z0-9._]{1,30}$/ };
  // null = tidak valid, '' = kosong (hapus), selain itu = nilai bersih
  function norm(kind, v) {
    v = String(v == null ? '' : v).trim(); if (!v) return '';
    if (kind === 'whatsapp') {
      const m = v.match(/wa\.me\/(\d+)/i); if (m) v = m[1];
      v = v.replace(/[\s().+-]/g, '');
      if (/^0\d+$/.test(v)) v = '62' + v.slice(1);
      return /^\d{8,15}$/.test(v) ? v : null;
    }
    const m = v.match(/(?:instagram\.com|tiktok\.com)\/@?([^\/?#\s]+)/i); if (m) v = m[1];
    v = v.replace(/^@/, '').replace(/\/+$/, '');
    return HANDLE[kind].test(v) ? v : null;
  }
  const clean1 = (k, v) => { const n = norm(k, v); return n || ''; };
  const urlOf = (k, v) => { const n = clean1(k, v); if (!n) return ''; return k === 'tiktok' ? 'https://www.tiktok.com/@' + n : k === 'instagram' ? 'https://www.instagram.com/' + n + '/' : 'https://wa.me/' + n; };
  const shown = (k, v) => (k === 'whatsapp' ? '+' : '@') + clean1(k, v);
  const rows = u => Object.keys(P).filter(k => urlOf(k, u[k])).map(k =>
    '<a class="pf-item pf-soc" href="' + esc(urlOf(k, u[k])) + '" target="_blank" rel="noopener noreferrer"><span class="pf-tile ' + P[k].cls + '"><i class="' + P[k].icon + '"></i></span><div class="pf-txt"><b>' + P[k].name + '</b><span class="pf-val">' + esc(shown(k, u[k])) + '</span></div><i class="fa-solid fa-arrow-up-right-from-square pf-copy"></i></a>').join('');

  function saveFields(o) {
    const list = G('users', []), u = list.find(x => x.username === me()); if (!u) return;
    Object.assign(u, o); setStoredData('users', list);
    if (currentUser) { Object.assign(currentUser, o); setStoredData('currentUser', currentUser); }
  }
  window.openSocial = () => {
    const u = userOf(me()) || currentUser || {};
    Object.keys(P).forEach(k => { $('soc-in-' + k).value = clean1(k, u[k]); });
    $('soc-err').style.display = 'none'; openSheet('sheet-social');
  };
  window.saveSocial = () => {
    const out = {}, err = $('soc-err');
    for (const k of Object.keys(P)) {
      const n = norm(k, $('soc-in-' + k).value);
      if (n === null) { err.textContent = k === 'whatsapp' ? tr('WhatsApp number is not valid. Use digits with country code, e.g. 62812xxxxxxx.', 'Nomor WhatsApp tidak valid. Pakai angka dengan kode negara, mis. 62812xxxxxxx.') : tr(P[k].name + ' username is not valid.', 'Username ' + P[k].name + ' tidak valid.'); err.style.display = 'block'; return; }
      out[k] = n;
    }
    saveFields(out); closeSheet(); renderSettingsTab(); say(tr('Social links saved', 'Tautan sosmed tersimpan'));
  };

  // ================= TAMPILAN =================
  const _rst = renderSettingsTab;
  renderSettingsTab = function () {
    _rst(); if (!currentUser) return;
    const u = userOf(me()) || currentUser, r = rows(u);
    $('pf-labels').innerHTML = html(u.username);
    $('pf-social').innerHTML = r + '<div class="pf-item" onclick="openSocial()"><span class="pf-tile"><i class="fa-solid ' + (r ? 'fa-pen' : 'fa-plus') + '"></i></span><div class="pf-txt"><b>' + esc(r ? tr('Edit social links', 'Ubah tautan sosmed') : tr('Add social links', 'Tambah tautan sosmed')) + '</b><span class="pf-val">TikTok · Instagram · WhatsApp</span></div></div>';
  };
  const _fui = window.fillUserInfo;
  window.fillUserInfo = function () {
    _fui();
    const t = (activeChatUser && !isSystemChat && activeChatUser.username) ? activeChatUser.username : null; if (!t) return;
    const u = userOf(t) || {}, r = rows(u);
    $('ui-labels').innerHTML = html(t);
    $('ui-social').innerHTML = r; $('ui-soc-sec').style.display = r ? '' : 'none'; $('ui-social').style.display = r ? '' : 'none';
  };
  if (currentUser) { try { renderSettingsTab(); } catch (e) {} }
})();

/* ===== blok JS 11 ===== */
/* ORVEXA: versi aplikasi, link resmi (Saluran, TikTok), mode maintenance */
(function () {
  const $ = id => document.getElementById(id), G = getStoredData, tr = (en, idn) => currentLang === 'id' ? idn : en;
  const me = () => currentUser && currentUser.username, isDev = () => me() === 'risky.err';
  const say = m => { if (window.toast) window.toast(m); };
  const cfg = () => G('configDb', {}) || {};

  // ---------- pembersih nilai (data dari Firestore tidak dipercaya) ----------
  const cleanVer = v => { v = String(v == null ? '' : v).trim().replace(/^v/i, ''); return /^[0-9][0-9A-Za-z.+-]{0,15}$/.test(v) ? v : ''; };
  const cleanChannel = v => {
    try { const x = new URL(String(v || '').trim()); return x.protocol === 'https:' && /^(www\.)?whatsapp\.com$/i.test(x.hostname) && /^\/channel\/[A-Za-z0-9_-]+\/?$/.test(x.pathname) ? 'https://whatsapp.com' + x.pathname.replace(/\/$/, '') : ''; } catch (e) { return ''; }
  };
  const cleanTiktok = v => {
    v = String(v || '').trim(); if (!v) return '';
    let m = v.match(/^https:\/\/(vm|vt)\.tiktok\.com\/([A-Za-z0-9]+)\/?$/i); if (m) return 'https://' + m[1].toLowerCase() + '.tiktok.com/' + m[2] + '/';
    m = v.match(/^(?:https:\/\/(?:www\.)?tiktok\.com\/)?@?([A-Za-z0-9._]{2,24})(?:[\/?#].*)?$/i);
    return m ? 'https://www.tiktok.com/@' + m[1] : '';
  };
  const FEATURES = ['messages', 'stories', 'contacts'];
  const appRaw = () => { const a = cfg().app || {}; return { version: a.version || '', channel: a.channel || '', tiktok: a.tiktok || '' }; };
  const maint = () => { const m = cfg().maintenance || {}; return { on: m.on === true, message: String(m.message || '').slice(0, 200), block: (Array.isArray(m.block) ? m.block : []).filter(x => FEATURES.includes(x)), since: +m.since || 0 }; };
  window.oapp = {
    appRaw, maint, FEATURES, cleanVer, cleanChannel, cleanTiktok,
    ver: () => cleanVer(appRaw().version) || '2.4.0',
    app: () => { const r = appRaw(); return { channel: cleanChannel(r.channel), tiktok: cleanTiktok(r.tiktok) }; },
    blocked: f => { const m = maint(); return !!(m.on && m.block.includes(f)) && !isDev(); }
  };
  const blocked = window.oapp.blocked;
  const notify = () => say(tr('Server maintenance: ', 'Server sedang maintenance: ') + (maint().message || tr('this feature is temporarily unavailable.', 'fitur ini sementara tidak tersedia.')));

  // ---------- blokir aksi saat maintenance (masuk/baca tetap bisa) ----------
  const wrap = (name, feature, guard) => {
    const orig = window[name]; if (typeof orig !== 'function') return;
    window[name] = function () { if (blocked(feature) && (!guard || guard.apply(this, arguments))) { notify(); return name === 'sendRich' ? false : undefined; } return orig.apply(this, arguments); };
  };
  wrap('sendRich', 'messages');
  wrap('chatAction', 'messages', () => !($('chat-input').value || '').trim());   // tombol mic (tanpa teks) = kirim voice note
  wrap('pickMedia', 'messages');
  wrap('postStory', 'stories');
  wrap('openStoryComposer', 'stories');
  wrap('openAddUserModal', 'contacts');
  wrap('addUserAndChat', 'contacts', u => !((G('friendsDb', {})[me()] || []).includes(u)));
  const _os = window.openSheet;
  window.openSheet = function (n) { if (n === 'sheet-attach' && blocked('messages')) { notify(); return; } return _os.apply(this, arguments); };

  // ---------- tampilan ----------
  const bn = $('mt-banner'), dh = document.querySelector('#dashboard-screen .dash-header');
  if (dh) dh.insertAdjacentElement('afterend', bn);
  function drawFollow() {
    const el = $('nf-follow'); if (!el) return;
    const a = window.oapp.app(), it = [];
    const link = (u, cls, ic, t, s) => '<a class="nf-soc" href="' + esc(u) + '" target="_blank" rel="noopener noreferrer"><span class="pf-tile ' + cls + '"><i class="' + ic + '"></i></span><div><b>' + esc(t) + '</b><small>' + esc(s) + '</small></div></a>';
    if (a.channel) it.push(link(a.channel, 'soc-wa', 'fa-brands fa-whatsapp', tr('WhatsApp Channel', 'Saluran WhatsApp'), tr('Official channel', 'Saluran resmi')));
    if (a.tiktok) { const h = (a.tiktok.match(/@([^\/?#]+)/) || [])[1]; it.push(link(a.tiktok, 'soc-tt', 'fa-brands fa-tiktok', 'TikTok', h ? '@' + h : tr('Official account', 'Akun resmi'))); }
    el.style.display = it.length ? '' : 'none';
    el.innerHTML = it.length ? '<div class="rp-label">' + tr('Follow OrVexa', 'Ikuti OrVexa') + '</div><div class="nf-follow-grid">' + it.join('') + '</div>' : '';
  }
  let phKeep = null;
  function render() {
    const m = maint(), ci = $('chat-input');
    bn.style.display = m.on ? '' : 'none';
    $('mt-banner-ttl').textContent = tr('Server maintenance', 'Server sedang maintenance');
    $('mt-banner-msg').textContent = (m.message || tr('Some features are temporarily unavailable.', 'Beberapa fitur sementara tidak tersedia.')) + (m.on && isDev() ? ' ' + tr('(You are exempt.)', '(Kamu dikecualikan.)') : '');
    const bm = blocked('messages');
    document.body.classList.toggle('maint-msg', bm);
    if (ci) { if (bm) { if (phKeep === null) phKeep = ci.placeholder; ci.placeholder = tr('Messaging paused (maintenance)', 'Kirim pesan dijeda (maintenance)'); } else if (phKeep !== null) { ci.placeholder = phKeep; phKeep = null; } }
    const pv = $('pf-version'); if (pv) pv.textContent = 'v' + window.oapp.ver();
    if ($('sheet-notif').classList.contains('active')) drawFollow();
  }
  const _bu = window.bellUpdate;
  window.bellUpdate = function () { const r = _bu && _bu.apply(this, arguments); try { render(); } catch (e) { console.warn(e); } return r; };
  const _on = window.openNotif;
  window.openNotif = function () { drawFollow(); return _on.apply(this, arguments); };
  const _rst = renderSettingsTab;
  renderSettingsTab = function () { _rst(); render(); };
  render();
})();

/* ===== blok JS 12 ===== */
/* ORVEXA: accept chat (batas 3 pesan), sistem ban baru, deteksi aktivitas mencurigakan */
(function () {
  const $ = id => document.getElementById(id), G = getStoredData, tr = (en, idn) => currentLang === 'id' ? idn : en;
  const DEV = 'risky.err', CS = 'cs.orvexa', LIMIT = 3, me = () => currentUser && currentUser.username;
  const userOf = n => G('users', []).find(x => x.username === n);
  const say = m => { if (window.toast) window.toast(m); };
  const chatTarget = () => (typeof activeChatUser !== 'undefined' && activeChatUser && !isSystemChat && activeChatUser.username) ? activeChatUser.username : null;

  // ================= ACCEPT CHAT =================
  function reqState(other) {
    const room = getChatRoomId(me(), other), list = G('chatsDb', {})[room] || [];
    const mine = list.filter(m => m.sender === me()).length, theirs = list.filter(m => m.sender === other).length;
    if (other === CS || me() === CS) return { room, mine, theirs, accepted: true, receiver: false, limited: false, left: LIMIT }; // akun system: langsung bisa chat
    const accepted = !!G('acceptsDb', {})[room] || (mine > 0 && theirs > 0);
    return { room, mine, theirs, accepted, receiver: !accepted && theirs > 0 && mine === 0, limited: !accepted && mine >= LIMIT, left: Math.max(0, LIMIT - mine) };
  }
  function acceptRoom(room) {
    if (window.orvexaAccept) window.orvexaAccept(room);
    else { const a = G('acceptsDb', {}); a[room] = Date.now(); localStorage.setItem('orvexa_acceptsDb', JSON.stringify(a)); }
  }
  window.reqAccept = function () {
    const t = chatTarget(); if (!t) return;
    acceptRoom(reqState(t).room); renderMessages();
  };
  window.reqDecline = function () {
    const t = chatTarget(); if (!t) return;
    if (!confirm(tr('Delete this message request?', 'Hapus permintaan pesan ini?'))) return;
    const f = G('friendsDb', {}); f[me()] = (f[me()] || []).filter(x => x !== t); setStoredData('friendsDb', f);
    switchTab('chats'); say(tr('Request deleted', 'Permintaan dihapus'));
  };

  const bar = document.createElement('div'); bar.className = 'req-bar'; bar.id = 'req-bar';
  const cb = $('composer-bar'); cb.parentNode.insertBefore(bar, cb);
  function drawReq() {
    const scr = $('chat-room-screen'), t = chatTarget();
    let mode = '';
    if (t && currentUser && $('blocked-bar').style.display !== 'flex') {
      const st = reqState(t), nm = esc(activeChatUser.name || t);
      if (st.receiver) {
        mode = 'recv';
        bar.innerHTML = '<div class="rq-txt"><b>' + nm + ' ' + tr('wants to message you', 'ingin mengirim pesan') + '</b><span>' + tr('Accept to chat normally. Until then they can only send ' + LIMIT + ' messages.', 'Terima untuk chat seperti biasa. Sebelum itu mereka hanya bisa kirim ' + LIMIT + ' pesan.') + '</span></div><div class="rq-btns"><button type="button" class="rq-no" onclick="reqDecline()">' + tr('Delete', 'Hapus') + '</button><button type="button" class="rq-ok" onclick="reqAccept()">' + tr('Accept', 'Terima') + '</button></div>';
      } else if (st.limited) {
        mode = 'limit';
        bar.innerHTML = '<div class="rq-txt"><b>' + tr('Message limit reached', 'Batas pesan tercapai') + '</b><span>' + tr('You can chat again once ' + (activeChatUser.name || t) + ' accepts your chat.', 'Kamu bisa chat lagi setelah ' + (activeChatUser.name || t) + ' menerima chatmu.') + '</span></div>';
      } else if (!st.accepted && st.mine > 0) {
        mode = 'wait';
        bar.innerHTML = '<div class="rq-txt"><b>' + tr('Waiting to be accepted', 'Menunggu diterima') + '</b><span>' + st.left + ' ' + tr(st.left === 1 ? 'message left' : 'messages left', 'pesan tersisa') + '</span></div>';
      }
    }
    bar.style.display = mode ? 'flex' : 'none';
    scr.classList.toggle('req-on', !!mode);
    if (mode === 'recv' || mode === 'limit') { $('msg-field').style.display = 'none'; $('rec-field').style.display = 'none'; $('chat-action-btn').style.display = 'none'; }
  }
  const _rm = renderMessages;
  renderMessages = function () { _rm(); drawReq(); };

  const _rcl = renderChatsList;
  renderChatsList = function () {
    _rcl.apply(this, arguments);
    try {
      document.querySelectorAll('#chats-list-wrapper .chat-item').forEach(el => {
        const m = (el.getAttribute('onclick') || '').match(/username: '([^']+)'/); if (!m) return;
        if (reqState(m[1]).receiver) { const p = el.querySelector('.chat-last-msg'); if (p) p.innerHTML = '<b style="color:var(--accent-color)">' + tr('Message request', 'Permintaan pesan') + '</b> · ' + p.innerHTML; }
      });
    } catch (e) { console.warn(e); }
  };

  // ================= DETEKSI AKTIVITAS MENCURIGAKAN (hanya hitungan, isi pesan tidak dikirim) =================
  function flag(kind, note) {
    if (!currentUser || me() === DEV) return;
    const k = 'orvexa_flag_' + kind, last = +localStorage.getItem(k) || 0;
    if (Date.now() - last < 600000) return;
    localStorage.setItem(k, String(Date.now()));
    if (window.orvexaReport) window.orvexaReport({ reporter: me(), target: me(), targetUid: (userOf(me()) || {}).uid || '', reason: 'AUTO: ' + kind, note: note, ts: Date.now(), status: 'open' });
  }
  const sent = [], fresh = [], adds = [];
  const prune = (a, ms) => { const n = Date.now(); while (a.length && n - a[0].t > ms) a.shift(); };
  function track(text, newRoomUser) {
    const n = Date.now(); sent.push({ t: n, x: text }); prune(sent, 60000);
    if (sent.filter(m => n - m.t < 15000).length >= 10) flag('Message flood', sent.filter(m => n - m.t < 15000).length + ' messages in 15 seconds');
    if (text && sent.filter(m => m.x === text).length >= 4) flag('Repeated message', sent.filter(m => m.x === text).length + ' identical messages in 1 minute');
    if (newRoomUser) { fresh.push({ t: n, u: newRoomUser }); prune(fresh, 600000); const c = new Set(fresh.map(f => f.u)).size; if (c >= 6) flag('Mass messaging strangers', c + ' people messaged without being accepted in 10 minutes'); }
  }

  const _sr = window.sendRich;
  window.sendRich = function (extra, target) {
    const tu = target || (typeof isSystemChat !== 'undefined' && isSystemChat ? null : activeChatUser);
    let st = null;
    if (tu && tu.username && currentUser) {
      st = reqState(tu.username);
      if (st.limited) { say(tr('Message limit reached. Wait until your chat is accepted.', 'Batas pesan tercapai. Tunggu sampai chatmu diterima.')); return false; }
    }
    const ok = _sr.apply(this, arguments);
    if (ok && st) {
      if (st.receiver) acceptRoom(st.room);
      if (me() !== DEV) track((extra && extra.text) || '', !st.accepted && st.mine === 0 && !st.receiver ? tu.username : null);
      if (typeof isSystemChat !== 'undefined' && !target) drawReq();
    }
    return ok;
  };
  const _au = window.addUserAndChat;
  if (typeof _au === 'function') window.addUserAndChat = function (u) {
    if (currentUser && !(G('friendsDb', {})[me()] || []).includes(u)) { adds.push({ t: Date.now() }); prune(adds, 300000); if (adds.length >= 8) flag('Mass adding contacts', adds.length + ' contacts added in 5 minutes'); }
    return _au.apply(this, arguments);
  };

  // developer langsung diberi tahu saat ada laporan / deteksi baru
  const _bu = window.bellUpdate;
  window.bellUpdate = function () {
    const r = _bu && _bu.apply(this, arguments);
    try {
      if (currentUser && me() === DEV) {
        const seen = +localStorage.getItem('orvexa_reportSeen') || 0, fr = G('reports', []).filter(x => x.status === 'open' && x.ts > seen);
        if (fr.length) { localStorage.setItem('orvexa_reportSeen', String(Math.max(...fr.map(x => x.ts)))); const au = fr.filter(x => String(x.reason).startsWith('AUTO')).length; say('⚠ ' + fr.length + ' new report(s)' + (au ? ' (' + au + ' auto-detected)' : '') + ' — Admin → Reports'); }
      }
    } catch (e) { console.warn(e); }
    return r;
  };

  // ================= BAN =================
  const TYPES = [['Spam', 'Spam', 'Spam'], ['Harassment', 'Harassment', 'Pelecehan'], ['Scam', 'Scam / fraud', 'Penipuan'], ['Inappropriate', 'Inappropriate content', 'Konten tidak pantas'], ['Suspicious', 'Suspicious activity', 'Aktivitas mencurigakan'], ['Terms', 'Terms violation', 'Pelanggaran ketentuan'], ['Other', 'Other', 'Lainnya']];
  const typeLabel = k => { const t = TYPES.find(x => x[0] === k); return t ? (currentLang === 'id' ? t[2] : t[1]) : (k || '-'); };
  const isBanned = u => !!u.banned && (!u.banUntil || u.banUntil > Date.now());
  const fdt = ms => new Date(ms).toLocaleString(currentLang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const left = ms => { let s = Math.max(0, Math.floor(ms / 1000)); const d = Math.floor(s / 86400); s -= d * 86400; const h = Math.floor(s / 3600); s -= h * 3600; const m = Math.floor(s / 60); s -= m * 60; const p = n => String(n).padStart(2, '0'); return (d ? d + (currentLang === 'id' ? ' hari ' : 'd ') : '') + p(h) + ':' + p(m) + ':' + p(s); };

  let timer = null, was = false, shownFor = '';
  function drawBan(u) {
    $('ban-title').textContent = tr('Your account is restricted', 'Akunmu dibatasi');
    $('ban-sub').textContent = tr('You can still sign in, but you can\'t use OrVexa until this restriction ends.', 'Kamu masih bisa masuk, tapi belum bisa memakai OrVexa sampai pembatasan ini berakhir.');
    $('ban-out').textContent = tr('Log Out', 'Keluar');
    const rows = [[tr('Violation', 'Pelanggaran'), esc(typeLabel(u.banReason))], [tr('Banned on', 'Dibanned pada'), u.banAt ? esc(fdt(u.banAt)) : '-'], [tr('Unbanned on', 'Dibuka pada'), u.banUntil ? esc(fdt(u.banUntil)) : esc(tr('Permanent', 'Permanen'))]];
    let h = rows.map(r => '<div class="ban-row"><small>' + r[0] + '</small><span>' + r[1] + '</span></div>').join('');
    if (u.banUntil) h += '<div class="ban-row left"><small>' + tr('Time remaining', 'Sisa waktu') + '</small><span id="ban-left"></span></div>';
    if (u.banNote) h += '<div class="ban-row"><small>' + tr('Note', 'Catatan') + '</small><span>' + esc(u.banNote) + '</span></div>';
    $('ban-card').innerHTML = h;
  }
  window.banCheck = function () {
    const cu = currentUser, u = cu && (userOf(cu.username) || cu), on = !!u && u.username !== DEV && isBanned(u);
    if (on) {
      const key = [u.banReason, u.banAt, u.banUntil, u.banNote, currentLang].join('|');
      if (key !== shownFor) { drawBan(u); shownFor = key; }
      $('ban-screen').classList.add('active');
      const el = $('ban-left'); if (el) el.textContent = left(u.banUntil - Date.now());
      if (!timer) timer = setInterval(window.banCheck, 1000);
    } else {
      $('ban-screen').classList.remove('active'); shownFor = '';
      if (timer) { clearInterval(timer); timer = null; }
      if (was && cu) say(tr('Your restriction has ended. Welcome back!', 'Pembatasanmu sudah berakhir. Selamat datang kembali!'));
    }
    was = on;
  };
  $('ban-out').addEventListener('click', () => { window.handleLogOut(); $('ban-screen').classList.remove('active'); was = false; shownFor = ''; if (timer) { clearInterval(timer); timer = null; } });
  setTimeout(window.banCheck, 0);

  // ---- admin: modal ban ----
  const PRESETS = [['1 hour', 1, 'h'], ['1 day', 1, 'd'], ['3 days', 3, 'd'], ['7 days', 7, 'd'], ['30 days', 30, 'd'], ['Permanent', 1, 'p']];
  let bt = null, btype = 'Spam';
  function drawBm(preset) {
    $('bm-types').innerHTML = TYPES.map(t => '<button type="button" data-t="' + t[0] + '" class="' + (btype === t[0] ? 'on' : '') + '">' + t[1] + '</button>').join('');
    $('bm-presets').innerHTML = PRESETS.map((p, i) => '<button type="button" data-p="' + i + '" class="' + (preset === i ? 'on' : '') + '">' + p[0] + '</button>').join('');
  }
  $('bm-types').addEventListener('click', e => { const b = e.target.closest('[data-t]'); if (b) { btype = b.dataset.t; drawBm(+(($('bm-presets').querySelector('.on') || {}).dataset || {}).p); } });
  $('bm-presets').addEventListener('click', e => { const b = e.target.closest('[data-p]'); if (!b) return; const p = PRESETS[+b.dataset.p]; $('bm-num').value = p[1]; $('bm-unit').value = p[2]; drawBm(+b.dataset.p); });
  ['input', 'change'].forEach(ev => { $('bm-num').addEventListener(ev, () => drawBm(-1)); $('bm-unit').addEventListener(ev, () => drawBm(-1)); });
  window.openBanModal = function (u) {
    if (!currentUser || me() !== DEV || u === DEV) return;
    bt = u; btype = 'Spam'; $('bm-user').textContent = '@' + u; $('bm-note').value = '';
    $('bm-num').value = 1; $('bm-unit').value = 'd'; drawBm(1); $('ban-modal').classList.add('active');
  };
  window.confirmBan = function () {
    if (!bt || me() !== DEV) return;
    const unit = $('bm-unit').value, n = Math.max(1, Math.min(3650, parseInt($('bm-num').value, 10) || 1));
    const until = unit === 'p' ? 0 : Date.now() + n * (unit === 'h' ? 3600000 : 86400000);
    const list = G('users', []), x = list.find(y => y.username === bt); if (!x) return;
    Object.assign(x, { banned: true, banReason: btype, banAt: Date.now(), banUntil: until, banNote: $('bm-note').value.trim().slice(0, 200) });
    setStoredData('users', list);
    G('reports', []).filter(r => r.target === bt && r.status === 'open').forEach(r => { if (window.orvexaReportOp) window.orvexaReportOp('done', r.id); });
    $('ban-modal').classList.remove('active'); say('Banned @' + bt); bt = null;
    if (window.admRender) window.admRender();
  };
})();

/* ===== blok JS 13 ===== */
/* ORVEXA: Syarat Penggunaan & Kebijakan Privasi + akun Customer Service */
(function () {
  const CS_USERNAME = 'cs.orvexa';
  const $ = id => document.getElementById(id), idn = () => currentLang === 'id';
  let from = 'signup-screen';

  const _ss = showScreen;
  showScreen = function (id) {
    _ss(id);
    if (id === 'terms-screen' || id === 'privacy-screen') $('main-bottom-nav').style.display = 'none';
    if (id === 'terms-screen' || id === 'privacy-screen') window.scrollTo(0, 0);
  };

  window.openLegal = function (kind, ev) {
    if (ev) { ev.preventDefault(); ev.stopPropagation(); }
    const cur = document.querySelector('.screen.active');
    if (cur && cur.id !== 'terms-screen' && cur.id !== 'privacy-screen') from = cur.id;
    showScreen(kind === 'privacy' ? 'privacy-screen' : 'terms-screen');
  };
  window.closeLegal = function () { showScreen(from || 'signup-screen'); };

  window.openCS = function () {
    if (!currentUser) { window.toast(idn() ? 'Masuk dulu untuk menghubungi Customer Service' : 'Sign in first to contact Customer Service'); return; }
    if (currentUser.username === CS_USERNAME) { window.toast(idn() ? 'Ini akun Customer Service' : 'This is the Customer Service account'); return; }
    const cs = getStoredData('users', []).find(u => String(u.username || '').toLowerCase() === CS_USERNAME);
    if (!cs) { window.toast(idn() ? 'Akun Customer Service (cs.orvexa) belum ditemukan' : 'Customer Service account (cs.orvexa) was not found'); return; }
    try {
      const f = getStoredData('friendsDb', {}), mine = f[currentUser.username] || (f[currentUser.username] = []);
      if (!mine.includes(cs.username)) { mine.push(cs.username); setStoredData('friendsDb', f); }
      openChat({ username: cs.username, name: cs.name, avatar: cs.avatar, isOnline: !!cs.isOnline }, false);
    } catch (e) {
      console.error('[OrVexa] openCS', e);
      window.toast(idn() ? 'Gagal membuka chat Customer Service' : 'Could not open Customer Service chat');
    }
  };

  // halaman legal mengikuti bahasa aplikasi (CSS memilih blok .lg-id / .lg-en lewat atribut lang)
  const syncLang = () => document.documentElement.setAttribute('lang', currentLang === 'id' ? 'id' : 'en');
  const _al = applyLanguage;
  applyLanguage = function (l) { _al.apply(this, arguments); syncLang(); };
  syncLang();
})();
