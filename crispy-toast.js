// crispy-toast.js

var CrispyToast = {};

CrispyToast.toasts = [];

CrispyToast.createToast = function(message, options) {
  options = options || {};
  var toast = {
    message: message,
    type: options.type || 'info',
    position: options.position || 'top-right',
    timeout: options.timeout || 3000
  };

  CrispyToast.toasts.push(toast);

  CrispyToast.renderToast(toast);

  setTimeout(function() {
    CrispyToast.removeToast(toast);
  }, toast.timeout);
};

CrispyToast.renderToast = function(toast) {
  var toastContainer = document.createElement('div');
  toastContainer.className = 'crispy-toast ' + toast.type + ' ' + toast.position;
  toastContainer.textContent = toast.message;

  document.body.appendChild(toastContainer);
};

CrispyToast.removeToast = function(toast) {
  var index = CrispyToast.toasts.indexOf(toast);
  if (index !== -1) {
    CrispyToast.toasts.splice(index, 1);
  }

  var toastElement = document.querySelector('.crispy-toast');
  if (toastElement) {
    document.body.removeChild(toastElement);
  }
};

CrispyToast.success = function(message, options) {
  CrispyToast.createToast(message, Object.assign({}, options, { type: 'success' }));
};

CrispyToast.info = function(message, options) {
  CrispyToast.createToast(message, Object.assign({}, options, { type: 'info' }));
};

CrispyToast.warning = function(message, options) {
  CrispyToast.createToast(message, Object.assign({}, options, { type: 'warning' }));
};

CrispyToast.error = function(message, options) {
  CrispyToast.createToast(message, Object.assign({}, options, { type: 'error' }));
};

// Attach CrispyToast to the global object (window)
window.CrispyToast = CrispyToast;
