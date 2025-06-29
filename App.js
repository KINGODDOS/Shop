// DOM কন্টেন্ট সম্পূর্ণ লোড হওয়ার পর কোড চলবে
document.addEventListener('DOMContentLoaded', () => {

    const pages = document.querySelectorAll('.page');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const logoutBtn = document.getElementById('logout-btn');

    // রাউটিং ফাংশন: কোন পেজ দেখানো হবে তা নির্ধারণ করে
    const router = () => {
        // ১. URL থেকে হ্যাশ (#login, #signup, #main) 가져오기
        // যদি হ্যাশ না থাকে, ডিফল্ট হবে #login
        const route = window.location.hash || '#login';

        // ২. প্রথমে সব পেজ লুকিয়ে ফেলা হয়
        pages.forEach(page => {
            page.classList.add('hidden');
        });

        // ৩. সঠিক পেজটি খুঁজে বের করে দেখানো হয়
        // যেমন: হ্যাশ যদি #main হয়, তাহলে সে id="main-page" এলিমেন্টটি খুঁজবে
        const activePage = document.querySelector(route + '-page');
        
        if (activePage) {
            // যদি পেজটি পাওয়া যায়, তাহলে 'hidden' ক্লাসটি সরিয়ে দেওয়া হয়
            activePage.classList.remove('hidden');
        } else {
            // যদি কোনো ভুল হ্যাশ থাকে, তাহলে লগইন পেজ দেখানো হয়
            document.getElementById('login-page').classList.remove('hidden');
        }
    };

    // --- ইভেন্ট লিসেনার ---

    // URL-এর হ্যাশ পরিবর্তন হলে 'router' ফাংশনটি কল হবে
    window.addEventListener('hashchange', router);

    // পেজ প্রথমবার লোড হলেও 'router' ফাংশনটি কল হবে
    window.addEventListener('load', router);
    
    // লগইন ফর্ম সাবমিট হলে
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // ফর্ম সাবমিট হওয়া আটকায়
            console.log('লগইন সফল! #main পেজে নিয়ে যাওয়া হচ্ছে।');
            // লগইন হলে #main পেজে রিডাইরেক্ট করা হয়
            window.location.hash = '#main';
        });
    }
    
    // সাইন-আপ ফর্ম সাবমিট হলে
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('সাইন আপ সফল! #login পেজে নিয়ে যাওয়া হচ্ছে।');
            // সাইন আপের পর লগইন পেজে রিডাইরেক্ট করা হয়
            window.location.hash = '#login';
        });
    }

    // লগআউট বাটনে ক্লিক করলে
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            console.log('ব্যবহারকারী লগআউট করেছে।');
            // লগআউট করে লগইন পেজে ফেরত পাঠানো হয়
            window.location.hash = '#login';
        });
    }

});
