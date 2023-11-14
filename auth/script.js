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

button1.addEventListener("click", () => {
  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;
  const firstName = signupFirstNameInput.value;
  const lastName = signupLastNameInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      })
        .then(() => {
          console.log("Профиль обновлен успешно");
          window.location.href = `../index.html?name=${firstName}&surname=${lastName}`;
        })
        .catch((error) => {
          console.error("Ошибка при обновлении профиля", error);
        });
    })
    .catch((error) => {
      console.error("Ошибка при регистрации", error);
    });
});

// button2.addEventListener("click", () => {
//   const email = signinEmailInput.value;
//   const password = signinPasswordInput.value;

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log("Вход успешен User:", user);
//       window.location.href = `newPage.html?name=${user.displayName}`;
//     })
//     .catch((error) => {
//       console.error("Ошибка при  входе", error);
//     });
// });


const signInRedirectButton = document.getElementById("signInRedirect");

signInRedirectButton.addEventListener("click", () => {
    // Перенаправление на другую страницу (замените 'signInPage.html' на ваш фактический файл входа)
    window.location.href = "signIn.html";
});