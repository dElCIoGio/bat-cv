import { Route, Routes} from "react-router";
import HomePage from "@/pages/root/landing-page.tsx";
import LandingPageLayout from "@/components/layout/landing-page/landing-page-layout.tsx";
import ForgotPasswordPage from "@/pages/auth/forgot-password.tsx";
import LoginPage from "@/pages/auth/login.tsx";
import SignUpPage from "@/pages/auth/sign-up.tsx";
import ResetPasswordPage from "@/pages/auth/reset-password.tsx";
import VerifyPage from "@/pages/auth/verify.tsx";
import ResumeBuilder from "@/pages/builder/data-form.tsx";



function App() {
    return (
        <Routes>

            {/* Root */}
            <Route path="/" element={<LandingPageLayout/>}>
                <Route index element={<HomePage/>}/>


                <Route path="auth">
                    <Route path="forgot-password" element={<ForgotPasswordPage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="sign-up" element={<SignUpPage/>}/>
                    <Route path="reset-password" element={<ResetPasswordPage/>}/>
                    <Route path="verify-email" element={<VerifyPage/>}/>

                </Route>


                <Route path="cv" element={<ResumeBuilder/>}/>
            </Route>
        </Routes>
    );
}

export default App;