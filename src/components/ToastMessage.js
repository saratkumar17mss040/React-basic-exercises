import './ToastMessageStyle.css';

export function ToastMessage({ buttonClickedOrNot, toastType }) {
    function setToastClass(buttonClickedOrNot, toastType) {
        if (!buttonClickedOrNot) {
            return 'toast hide';
        } else if (buttonClickedOrNot && toastType === 'success') {
            return 'toast show bg-green';
        } else if (buttonClickedOrNot && toastType === 'warning') {
            return 'toast show bg-orange';
        } else if (buttonClickedOrNot && toastType === 'error') {
            return 'toast show bg-red';
        }
    }

    // function removeToast() {
    //     buttonClickedOrNot = false;
    //     toastType = 'success';
    //     console.log(buttonClickedOrNot, toastType);
    //     setToastClass(buttonClickedOrNot, toastType);
    // }

    return (
        <div className={setToastClass(buttonClickedOrNot, toastType)}>
            Toast message &nbsp;
            {/* <button onClick={removeToast}>X</button> */}
        </div>
    );
}
