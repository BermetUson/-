import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const signupEmailInput = document.getElementById("signupEmail");
const signupPasswordInput = document.getElementById("signupPassword");
const signupFirstNameInput = document.getElementById("signupFirstName"); // Дополнительное поле: имя
const signupLastNameInput = document.getElementById("signupLastName"); // Дополнительное поле: фамилия
const signinEmailInput = document.getElementById("signinEmail");
const signinPasswordInput = document.getElementById("signinPassword");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const auth = getAuth();

button2.addEventListener("click", () => {
  const email = signinEmailInput.value;
  const password = signinPasswordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Вход успешен User:", user);
      window.location.href = `../index.html?name=${user.displayName}`;
    })
    .catch((error) => {
      console.error("Ошибка при  входе", error);
    });
});
