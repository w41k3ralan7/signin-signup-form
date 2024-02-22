document.addEventListener('DOMContentLoaded', function () {
    const switchformbtn = document.querySelector(".signuphere");
    const card = document.getElementById('card')
    const signupForm = document.getElementById('sign-up');
    const loginForm = document.getElementById('sign-in');
    const p = document.getElementById('discription');
    const signingmsz = document.getElementById('incard')
    const visibility = document.getElementById('eye')
    const password = document.getElementById('pass')
    let flag = false;

    switchformbtn.addEventListener("click", () => {
        let signupFormStyle = window.getComputedStyle(signupForm);

        if (flag == false) {
            loginForm.style.transform = "rotateY(90deg) translateX(-50%)"
            signupForm.style.transform = "rotateY(0deg) translateX(-50%)"
            card.style.transform = 'translateX(-10%)'
            card.style.borderRadius = "29% 71% 77% 23% / 82% 17% 83% 18%  "
            signingmsz.textContent = "Already have an account? Login here "
            switchformbtn.textContent = "Login"
            signupForm.style.transform = 'rotateY(0deg)'
            flag = !flag
        } else {
            signupForm.style.transform = "rotateY(-90deg) translateX(50%)"
            loginForm.style.transform = "rotateY(0deg) translateX(0%)"
            card.style.transform = 'translateX(100%)'
            card.style.borderRadius = "17% 83% 30% 70% / 54% 21% 79% 46% "
            signingmsz.textContent = "New here? Sign-up to join us"
            switchformbtn.textContent = "Sign Up"
            flag = !flag
        }
    });

    let visible = false;
    eye.addEventListener('click', () => {
        if (visible == false) {
            pass.type = "text";
            eye.textContent = "visibility_off";
            visible = !visible
        } else {
            pass.type = "password"
            eye.textContent = "visibility"
            visible = !visible
        }
    })
});
