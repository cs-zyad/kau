import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './AuthPage.css';

export function LoginPage() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>تسجيل الدخول</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>البريد الإلكتروني للجامعة</label>
                        <input type="email" placeholder="example@stu.kau.edu.sa" required />
                    </div>
                    <div className="form-group">
                        <label>كلمة المرور</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>
                    <button className="btn btn--primary btn--full">دخول</button>
                    <p className="auth-switch">ليس لديك حساب؟ <Link to="/register">إنشاء حساب جديد</Link></p>
                </form>
            </div>
        </div>
    );
}

export function RegisterPage() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>إنشاء حساب جديد</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>الاسم بالكامل</label>
                        <input type="text" placeholder="أدخل اسمك" required />
                    </div>
                    <div className="form-group">
                        <label>البريد الإلكتروني للجامعة</label>
                        <input type="email" placeholder="example@stu.kau.edu.sa" required />
                    </div>
                    <div className="form-group">
                        <label>كلمة المرور</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>
                    <button className="btn btn--primary btn--full">تسجيل</button>
                    <p className="auth-switch">لديك حساب بالفعل؟ <Link to="/login">تسجيل الدخول</Link></p>
                </form>
            </div>
        </div>
    );
}
