function openSnackbar(id, timeout) {
    document.getElementById(id).classList.add('olt-snackbar--is-open');
    setTimeout(() => {
        document.getElementById(id).classList.remove('olt-snackbar--is-open');
    }, timeout);
};