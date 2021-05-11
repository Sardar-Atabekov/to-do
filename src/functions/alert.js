import Swal from "sweetalert2";
function Alert(title, icon = "success", confirmBtnColor = "#32b482") {
  Swal.fire({
    showConfirmButton: true,
    icon: icon,
    width: 500,
    title: title,
    timer: 2000,
    confirmButtonColor: confirmBtnColor,
    // confirmButtonText: "ок",
  });
}

function confirmAlert(title) {
  Swal.fire({
    width: 500,
    height: 500,
    showConfirmButton: true,
    icon: "error",
    showCancelButton: true,
    confirmButtonColor: "#32b482",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Написать в поддержку",
    cancelButtonText: "ОК",
    title: title,
  }).then((result) => {
    if (result.value) {
      setTimeout(() => {
        window.location.href = "/to-do/";
      }, 1000);
    }
  });
}

const quitMessage = () => {
  Swal.fire({
    title: "Вы уверены?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#32b482",
    cancelButtonColor: "#d33",
    cancelButtonText: "Нет",
    confirmButtonText: "Да, выйти",
  }).then((result) => {
    if (result.value) {
      localStorage.removeItem("tokenData");
      window.location.href = "/to-do/";
    }
  });
};

export { confirmAlert, quitMessage };
export default Alert;
