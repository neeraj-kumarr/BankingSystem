import React from 'react';

export default function Home() {
    return (
        <div style={{
            backgroundImage: "url('https://img.freepik.com/premium-vector/interbank-currency-exchange_387612-259.jpg')",
            backgroundSize: 'cover', // Adjust based on your needs
            backgroundRepeat: 'no-repeat', // Adjust based on your needs
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Opacity set to 0.2
        }}>
            <div className='container d-flex align-items-center min-vh-100 text-white'>
                <div className='w-50'>
                    <h1 className='p-4' style={{ fontSize: '80px' }}>Welcome to EasyPay <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z" />
                        <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
                    </svg>
                    </h1>
                    <p ><i>
                        Welcome to EasyPay Adventure! Dive into a world of seamless and secure financial fun with EasyPay. Whether you're the master of your personal piggy bank or the captain of your business treasure chest, our playful platform offers a spectrum of services crafted just for you. Infused with innovation, reliability, and a dash of personalized support, EasyPay is your ticket to a joyous financial journey. Glide through our whimsical interface, breeze through hassle-free transactions, and redefine the joy of banking. Embark on the EasyPay expedition today and let managing your finances be a delightful experience!
                    </i>
                    </p>
                </div>
            </div>
            <footer className='text-center text-white p-4'>
                <p>EasyPay @2023 All Rights Reserved.</p>
            </footer>
        </div>
    );
}
