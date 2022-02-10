const messageSuccessContainer = document.querySelector(".message-success");
const messageInfoContainer = document.querySelector(".message-info");
const messageWarningContainer = document.querySelector(".message-warning");
const messageErrorContainer = document.querySelector(".message-error");

messageErrorContainer.innerHTML = createToaster("error", "File is not uploaded");
messageSuccessContainer.innerHTML = createToaster("success", "File is uploaded");
messageWarningContainer.innerHTML = createToaster("warning", "File must be less than 5mb");
messageInfoContainer.innerHTML = createToaster("info", "Your file is uploading, but it will take som time");


