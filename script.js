// Daftar harga game dan nominal
const gamePrices = {
    'mobile-legends': [
        { nominal: '50 Diamond', price: 10000, displayPrice: 'Rp 10.000' },
        { nominal: '100 Diamond', price: 20000, displayPrice: 'Rp 20.000' },
        { nominal: '250 Diamond', price: 50000, displayPrice: 'Rp 50.000' },
        { nominal: '500 Diamond', price: 100000, displayPrice: 'Rp 100.000' },
        { nominal: '1000 Diamond', price: 200000, displayPrice: 'Rp 200.000' },
        { nominal: '2000 Diamond', price: 400000, displayPrice: 'Rp 400.000' }
    ],
    'ff': [
        { nominal: '50 Diamond', price: 8000, displayPrice: 'Rp 8.000' },
        { nominal: '100 Diamond', price: 15000, displayPrice: 'Rp 15.000' },
        { nominal: '210 Diamond', price: 30000, displayPrice: 'Rp 30.000' },
        { nominal: '500 Diamond', price: 75000, displayPrice: 'Rp 75.000' },
        { nominal: '1000 Diamond', price: 150000, displayPrice: 'Rp 150.000' }
    ],
    'pubg': [
        { nominal: '100 UC', price: 15000, displayPrice: 'Rp 15.000' },
        { nominal: '500 UC', price: 75000, displayPrice: 'Rp 75.000' },
        { nominal: '1000 UC', price: 150000, displayPrice: 'Rp 150.000' },
        { nominal: '2000 UC', price: 300000, displayPrice: 'Rp 300.000' }
    ],
    'codm': [
        { nominal: '80 CP', price: 12000, displayPrice: 'Rp 12.000' },
        { nominal: '240 CP', price: 36000, displayPrice: 'Rp 36.000' },
        { nominal: '400 CP', price: 60000, displayPrice: 'Rp 60.000' },
        { nominal: '800 CP', price: 120000, displayPrice: 'Rp 120.000' }
    ],
    'genshin': [
        { nominal: '60 Primogems', price: 10000, displayPrice: 'Rp 10.000' },
        { nominal: '330 Primogems', price: 50000, displayPrice: 'Rp 50.000' },
        { nominal: '1090 Primogems', price: 160000, displayPrice: 'Rp 160.000' },
        { nominal: '2240 Primogems', price: 330000, displayPrice: 'Rp 330.000' }
    ],
    'honkai': [
        { nominal: '50 Stellar Jade', price: 10000, displayPrice: 'Rp 10.000' },
        { nominal: '300 Stellar Jade', price: 55000, displayPrice: 'Rp 55.000' },
        { nominal: '1000 Stellar Jade', price: 180000, displayPrice: 'Rp 180.000' },
        { nominal: '2000 Stellar Jade', price: 360000, displayPrice: 'Rp 360.000' }
    ]
};

const ADMIN_FEE_PERCENT = 3; // 3% admin fee

// Update opsi nominal berdasarkan game yang dipilih
function updatePrices() {
    const gameSelect = document.getElementById('game-select');
    const amountSelect = document.getElementById('amount-select');
    
    amountSelect.innerHTML = '<option value="">-- Pilih Nominal --</option>';
    
    if (gameSelect.value && gamePrices[gameSelect.value]) {
        gamePrices[gameSelect.value].forEach((item, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${item.nominal} - ${item.displayPrice}`;
            amountSelect.appendChild(option);
        });
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
    
    if (!gameSelect.value || !amountSelect.value || !userId || !email) {
        alert('Silakan lengkapi semua data terlebih dahulu!');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Email tidak valid!');
        return;
    }
    
    document.querySelector('.topup-section').style.display = 'none';
    document.getElementById('payment-section').style.display = 'block';
    window.scrollTo(0, 0);
}

// Validasi email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
    const totalPrice = document.getElementById('total-price').textContent;
    
    const gameName = gameSelect.options[gameSelect.selectedIndex].text;
    const amountName = amountSelect.options[amountSelect.selectedIndex].text;
    
    let message = `Halo, saya ingin mengkonfirmasi pembayaran:\n\n`;
    message += `Game: ${gameName}\n`;
    message += `Total: ${totalPrice}\n`;
    message += `ID Akun: ${userId}\n`;
    message += `Email: ${email}\n\n`;
    message += `Mohon segera dikonfirmasi. Terima kasih!`;
    
    const whatsappNumber = '6285804048057';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Tampilkan notifikasi
    alert('Hubungi admin via WhatsApp untuk konfirmasi pembayaran!');
}

// Kembali ke form
function backToForm() {
    document.querySelector('.topup-section').style.display = 'block';
    document.getElementById('payment-section').style.display = 'none';
    window.scrollTo(0, 0);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set default ke QRIS payment
    selectPayment('qris');
});