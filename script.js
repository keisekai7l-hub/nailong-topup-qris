// Daftar harga game dan nominal
const gamePrices = {
    'mobile-legends': [
        { nominal: '50 Diamond', price: 10000, displayPrice: 'Rp 10.000' },
        { nominal: '100 Diamond', price: 20000, displayPrice: 'Rp 20.000' },
        { nominal: '250 Diamond', price: 50000, displayPrice: 'Rp 50.000' },
        { nominal: '500 Diamond', price: 100000, displayPrice: 'Rp 100.000' },
        { nominal: '750 Diamond', price: 140000, displayPrice: 'Rp 140.000' },
        { nominal: '1000 Diamond', price: 200000, displayPrice: 'Rp 200.000' },
        { nominal: '1500 Diamond', price: 280000, displayPrice: 'Rp 280.000' },
        { nominal: '2000 Diamond', price: 400000, displayPrice: 'Rp 400.000' },
        { nominal: '3000 Diamond', price: 600000, displayPrice: 'Rp 600.000' },
        { nominal: '5000 Diamond', price: 1000000, displayPrice: 'Rp 1.000.000' }
    ],
    'ff': [
        { nominal: '50 Diamond', price: 8000, displayPrice: 'Rp 8.000' },
        { nominal: '100 Diamond', price: 15000, displayPrice: 'Rp 15.000' },
        { nominal: '210 Diamond', price: 30000, displayPrice: 'Rp 30.000' },
        { nominal: '500 Diamond', price: 75000, displayPrice: 'Rp 75.000' },
        { nominal: '1000 Diamond', price: 150000, displayPrice: 'Rp 150.000' },
        { nominal: '2000 Diamond', price: 280000, displayPrice: 'Rp 280.000' },
        { nominal: '5000 Diamond', price: 700000, displayPrice: 'Rp 700.000' }
    ],
    'pubg': [
        { nominal: '100 UC', price: 15000, displayPrice: 'Rp 15.000' },
        { nominal: '300 UC', price: 40000, displayPrice: 'Rp 40.000' },
        { nominal: '500 UC', price: 75000, displayPrice: 'Rp 75.000' },
        { nominal: '1000 UC', price: 150000, displayPrice: 'Rp 150.000' },
        { nominal: '1500 UC', price: 225000, displayPrice: 'Rp 225.000' },
        { nominal: '2000 UC', price: 300000, displayPrice: 'Rp 300.000' },
        { nominal: '5000 UC', price: 750000, displayPrice: 'Rp 750.000' }
    ],
    'codm': [
        { nominal: '80 CP', price: 12000, displayPrice: 'Rp 12.000' },
        { nominal: '240 CP', price: 36000, displayPrice: 'Rp 36.000' },
        { nominal: '400 CP', price: 60000, displayPrice: 'Rp 60.000' },
        { nominal: '800 CP', price: 120000, displayPrice: 'Rp 120.000' },
        { nominal: '1600 CP', price: 240000, displayPrice: 'Rp 240.000' },
        { nominal: '2400 CP', price: 360000, displayPrice: 'Rp 360.000' },
        { nominal: '4000 CP', price: 600000, displayPrice: 'Rp 600.000' }
    ],
    'genshin': [
        { nominal: '60 Primogems', price: 10000, displayPrice: 'Rp 10.000' },
        { nominal: '330 Primogems', price: 50000, displayPrice: 'Rp 50.000' },
        { nominal: '680 Primogems', price: 100000, displayPrice: 'Rp 100.000' },
        { nominal: '1090 Primogems', price: 160000, displayPrice: 'Rp 160.000' },
        { nominal: '1980 Primogems', price: 300000, displayPrice: 'Rp 300.000' },
        { nominal: '2240 Primogems', price: 330000, displayPrice: 'Rp 330.000' },
        { nominal: '3860 Primogems', price: 600000, displayPrice: 'Rp 600.000' }
    ],
    'honkai': [
        { nominal: '50 Stellar Jade', price: 10000, displayPrice: 'Rp 10.000' },
        { nominal: '300 Stellar Jade', price: 55000, displayPrice: 'Rp 55.000' },
        { nominal: '680 Stellar Jade', price: 120000, displayPrice: 'Rp 120.000' },
        { nominal: '1000 Stellar Jade', price: 180000, displayPrice: 'Rp 180.000' },
        { nominal: '2000 Stellar Jade', price: 360000, displayPrice: 'Rp 360.000' },
        { nominal: '3680 Stellar Jade', price: 660000, displayPrice: 'Rp 660.000' }
    ],
    'roblox': [
        { nominal: '100 Robux', price: 15000, displayPrice: 'Rp 15.000' },
        { nominal: '400 Robux', price: 55000, displayPrice: 'Rp 55.000' },
        { nominal: '800 Robux', price: 110000, displayPrice: 'Rp 110.000' },
        { nominal: '1700 Robux', price: 230000, displayPrice: 'Rp 230.000' },
        { nominal: '3500 Robux', price: 460000, displayPrice: 'Rp 460.000' },
        { nominal: '4500 Robux', price: 600000, displayPrice: 'Rp 600.000' },
        { nominal: '10000 Robux', price: 1300000, displayPrice: 'Rp 1.300.000' }
    ]
};

const ADMIN_FEE_PERCENT = 3; // 3% admin fee

// Update opsi nominal berdasarkan game yang dipilih
function updatePrices() {
    const gameSelect = document.getElementById('game-select');
    const amountSelect = document.getElementById('amount-select');
    const mlFields = document.getElementById('ml-fields');
    const robloxFields = document.getElementById('roblox-fields');
    
    amountSelect.innerHTML = '<option value="">-- Pilih Nominal --</option>';
    
    // Tampilkan/sembunyikan field Mobile Legends
    if (gameSelect.value === 'mobile-legends') {
        mlFields.style.display = 'block';
        robloxFields.style.display = 'none';
    } else if (gameSelect.value === 'roblox') {
        robloxFields.style.display = 'block';
        mlFields.style.display = 'none';
    } else {
        mlFields.style.display = 'none';
        robloxFields.style.display = 'none';
    }
    
    if (gameSelect.value && gamePrices[gameSelect.value]) {
        gamePrices[gameSelect.value].forEach((item, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${item.nominal} - ${item.displayPrice}`;
            amountSelect.appendChild(option);
        });
    }
}

// Verifikasi Mobile Legends Account
async function verifyMLAccount() {
    const mlId = document.getElementById('ml-id').value;
    const resultDiv = document.getElementById('ml-verify-result');
    
    if (!mlId) {
        resultDiv.innerHTML = '<span class="error">❌ Masukkan ID terlebih dahulu</span>';
        return;
    }
    
    resultDiv.innerHTML = '<span class="loading">⏳ Verifikasi...</span>';
    
    try {
        // Simulasi verifikasi (dalam implementasi nyata, hubungi API game)
        const response = await fetch(`https://api.mobilelegends.com/player/${mlId}`).catch(() => null);
        
        if (response && response.ok) {
            const data = await response.json();
            resultDiv.innerHTML = `<span class="success">✅ Akun ditemukan: ${data.playerName}</span>`;
        } else {
            // Simulasi jika API tidak tersedia, gunakan validasi lokal
            if (mlId.length >= 5 && /^\d+$/.test(mlId)) {
                resultDiv.innerHTML = `<span class="success">✅ Format ID valid</span>`;
            } else {
                resultDiv.innerHTML = '<span class="error">❌ ID tidak valid</span>';
            }
        }
    } catch (error) {
        if (/^\d+$/.test(mlId) && mlId.length >= 5) {
            resultDiv.innerHTML = `<span class="success">✅ Format ID valid</span>`;
        } else {
            resultDiv.innerHTML = '<span class="error">❌ ID tidak valid</span>';
        }
    }
}

// Verifikasi Roblox Account
async function verifyRobloxAccount() {
    const username = document.getElementById('roblox-username').value;
    const resultDiv = document.getElementById('roblox-verify-result');
    
    if (!username) {
        resultDiv.innerHTML = '<span class="error">❌ Masukkan username terlebih dahulu</span>';
        return;
    }
    
    resultDiv.innerHTML = '<span class="loading">⏳ Verifikasi...</span>';
    
    try {
        // Verifikasi Roblox menggunakan API
        const response = await fetch(`https://api.roblox.com/users/get-by-username?username=${username}`);
        
        if (response.ok) {
            const data = await response.json();
            if (data.id) {
                resultDiv.innerHTML = `<span class="success">✅ Username ditemukan: ${data.name}</span>`;
                document.getElementById('roblox-username').dataset.userId = data.id;
            } else {
                resultDiv.innerHTML = '<span class="error">❌ Username tidak ditemukan</span>';
            }
        } else {
            resultDiv.innerHTML = '<span class="error">❌ Username tidak ditemukan</span>';
        }
    } catch (error) {
        console.error('Roblox verification error:', error);
        resultDiv.innerHTML = '<span class="error">❌ Error verifikasi</span>';
    }
}

// Update total harga
function updateTotal() {
    const gameSelect = document.getElementById('game-select');
    const amountSelect = document.getElementById('amount-select');
    
    if (!gameSelect.value || !amountSelect.value) {
        document.getElementById('price-display').textContent = 'Rp 0';
        document.getElementById('admin-fee').textContent = 'Rp 0';
        document.getElementById('total-price').textContent = 'Rp 0';
        return;
    }
    
    const game = gameSelect.value;
    const amountIndex = amountSelect.value;
    const selectedAmount = gamePrices[game][amountIndex];
    
    const basePrice = selectedAmount.price;
    const adminFee = Math.round(basePrice * ADMIN_FEE_PERCENT / 100);
    const totalPrice = basePrice + adminFee;
    
    document.getElementById('price-display').textContent = formatPrice(basePrice);
    document.getElementById('admin-fee').textContent = formatPrice(adminFee);
    document.getElementById('total-price').textContent = formatPrice(totalPrice);
    document.getElementById('transfer-amount').textContent = formatPrice(totalPrice);
}

// Format harga ke format Rupiah
function formatPrice(price) {
    return 'Rp ' + price.toLocaleString('id-ID');
}

// Generate QR Code
function generateQRCode() {
    const qrcodeDiv = document.getElementById('qrcode');
    if (qrcodeDiv.innerHTML === '') {
        new QRCode(qrcodeDiv, {
            text: 'https://aspi-qris.id/ID10254669752120',
            width: 250,
            height: 250,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}

// Lanjut ke pembayaran
function proceedToPayment() {
    const gameSelect = document.getElementById('game-select');
    const amountSelect = document.getElementById('amount-select');
    const userId = document.getElementById('user-id').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Validasi Mobile Legends
    if (gameSelect.value === 'mobile-legends') {
        const mlId = document.getElementById('ml-id').value;
        const mlServer = document.getElementById('ml-server').value;
        const mlResult = document.getElementById('ml-verify-result').innerHTML;
        
        if (!mlId || !mlServer) {
            alert('Silakan masukkan Mobile Legends ID dan pilih Server!');
            return;
        }
        
        if (!mlResult.includes('success')) {
            alert('Silakan verifikasi Mobile Legends ID terlebih dahulu!');
            return;
        }
    }
    
    // Validasi Roblox
    if (gameSelect.value === 'roblox') {
        const robloxUsername = document.getElementById('roblox-username').value;
        const robloxResult = document.getElementById('roblox-verify-result').innerHTML;
        
        if (!robloxUsername) {
            alert('Silakan masukkan Roblox username!');
            return;
        }
        
        if (!robloxResult.includes('success')) {
            alert('Silakan verifikasi Roblox username terlebih dahulu!');
            return;
        }
    }
    
    if (!gameSelect.value || !amountSelect.value || !userId || !email || !phone) {
        alert('Silakan lengkapi semua data terlebih dahulu!');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Email tidak valid!');
        return;
    }
    
    if (!isValidPhone(phone)) {
        alert('Nomor WhatsApp tidak valid!');
        return;
    }
    
    document.querySelector('.topup-section').style.display = 'none';
    document.getElementById('payment-section').style.display = 'block';
    document.getElementById('payment-status').style.display = 'none';
    document.getElementById('btn-confirm').style.display = 'block';
    
    // Generate QR Code
    setTimeout(generateQRCode, 100);
    
    window.scrollTo(0, 0);
}

// Validasi email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validasi nomor WhatsApp
function isValidPhone(phone) {
    const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
    return phoneRegex.test(phone.replace(/[^0-9+]/g, ''));
}

// Pilih metode pembayaran
function selectPayment(method) {
    // Hapus active class dari semua card
    document.querySelectorAll('.payment-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Sembunyikan semua payment detail
    document.getElementById('qris-payment').style.display = 'none';
    document.getElementById('bank-payment').style.display = 'none';
    document.getElementById('ewallet-payment').style.display = 'none';
    
    // Aktifkan card yang dipilih
    event.target.closest('.payment-card').classList.add('active');
    
    // Tampilkan payment detail yang dipilih
    if (method === 'qris') {
        document.getElementById('qris-payment').style.display = 'block';
        generateQRCode();
    } else if (method === 'bank') {
        document.getElementById('bank-payment').style.display = 'block';
    } else if (method === 'ewallet') {
        document.getElementById('ewallet-payment').style.display = 'block';
    }
}

// Buka E-Wallet
function openEwallet(provider) {
    const totalPrice = document.getElementById('total-price').textContent;
    let phoneNumber = '';
    let providerName = '';
    
    if (provider === 'dana') {
        phoneNumber = '628513688425';
        providerName = 'DANA';
    } else if (provider === 'gopay') {
        phoneNumber = '628513688425';
        providerName = 'GoPay';
    } else if (provider === 'shopeepay') {
        phoneNumber = '628580408057';
        providerName = 'ShopeePay';
    }
    
    let message = `Saya ingin top up dengan ${providerName}. Total: ${totalPrice}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Konfirmasi pembayaran
function confirmPayment() {
    const gameSelect = document.getElementById('game-select');
    const amountSelect = document.getElementById('amount-select');
    const userId = document.getElementById('user-id').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const totalPrice = document.getElementById('total-price').textContent;
    
    const gameName = gameSelect.options[gameSelect.selectedIndex].text;
    const amountName = amountSelect.options[amountSelect.selectedIndex].text;
    
    // Simpan data transaksi
    const transactionData = {
        game: gameName,
        nominal: amountName,
        total: totalPrice,
        userId: userId,
        email: email,
        phone: phone,
        timestamp: new Date().toLocaleString('id-ID')
    };
    
    // Tambahkan info Mobile Legends jika ada
    if (gameSelect.value === 'mobile-legends') {
        const mlId = document.getElementById('ml-id').value;
        const mlServer = document.getElementById('ml-server').value;
        transactionData.mlId = mlId;
        transactionData.mlServer = mlServer;
    }
    
    // Tambahkan info Roblox jika ada
    if (gameSelect.value === 'roblox') {
        const robloxUsername = document.getElementById('roblox-username').value;
        transactionData.robloxUsername = robloxUsername;
    }
    
    // Simpan ke localStorage
    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    transactions.push(transactionData);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    // Kirim notifikasi ke admin
    let message = `🎮 NOTIFIKASI PEMBAYARAN DITERIMA\n\n`;
    message += `Game: ${gameName}\n`;
    message += `Nominal: ${amountName}\n`;
    message += `Total: ${totalPrice}\n`;
    message += `User ID: ${userId}\n`;
    message += `Email: ${email}\n`;
    message += `WhatsApp: ${phone}\n`;
    
    if (gameSelect.value === 'mobile-legends') {
        message += `ML ID: ${transactionData.mlId}\n`;
        message += `Server: ${transactionData.mlServer}\n`;
    }
    
    if (gameSelect.value === 'roblox') {
        message += `Roblox Username: ${transactionData.robloxUsername}\n`;
    }
    
    message += `\nWaktu: ${transactionData.timestamp}\n\n`;
    message += `Status: MENUNGGU PROSES`;
    
    const whatsappNumber = '6285804048057';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Tampilkan status pembayaran
    showPaymentStatus(gameName, amountName, totalPrice);
}

// Tampilkan status pembayaran
function showPaymentStatus(game, nominal, total) {
    document.getElementById('payment-section').style.display = 'none';
    document.getElementById('payment-status').style.display = 'block';
    document.getElementById('status-total').textContent = total;
    
    // Countdown timer
    let timeLeft = 15 * 60; // 15 menit
    const countdownInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('payment-countdown').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
    
    // Simulasi pembayaran masuk setelah 3-8 detik
    setTimeout(() => {
        showSuccessScreen(game, nominal, total);
    }, 3000 + Math.random() * 5000);
}

// Tampilkan layar sukses
function showSuccessScreen(game, nominal, total) {
    document.getElementById('payment-status').style.display = 'none';
    document.getElementById('success-section').style.display = 'block';
    
    document.getElementById('success-game').textContent = game;
    document.getElementById('success-nominal').textContent = nominal;
    document.getElementById('success-total').textContent = total;
    
    // Countdown 5 menit untuk diamond masuk
    let timeLeft = 5 * 60; // 5 menit
    const countdownInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('countdown').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById('success-status').textContent = '✅ Diamond/Robux Masuk';
            document.getElementById('countdown').style.display = 'none';
        }
    }, 1000);
    
    window.scrollTo(0, 0);
}

// Pesanan baru
function newOrder() {
    // Reset form
    document.getElementById('game-select').value = '';
    document.getElementById('amount-select').innerHTML = '<option value="">-- Pilih Nominal --</option>';
    document.getElementById('user-id').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('ml-id').value = '';
    document.getElementById('ml-server').value = '';
    document.getElementById('roblox-username').value = '';
    document.getElementById('ml-verify-result').innerHTML = '';
    document.getElementById('roblox-verify-result').innerHTML = '';
    
    // Tampilkan form section
    document.querySelector('.topup-section').style.display = 'block';
    document.getElementById('payment-section').style.display = 'none';
    document.getElementById('success-section').style.display = 'none';
    document.getElementById('payment-status').style.display = 'none';
    
    window.scrollTo(0, 0);
}

// Kembali ke form
function backToForm() {
    document.querySelector('.topup-section').style.display = 'block';
    document.getElementById('payment-section').style.display = 'none';
    window.scrollTo(0, 0);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    selectPayment('qris');
});