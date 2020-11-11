// REGISTER SERVICE WORKER
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js')
      .then(function() {
        console.log('Pendaftaran ServiceWorker berhasil');
      })
      .catch(function(){
        console.log('Pendaftaran ServiceWorker gagal');
      });
    })
  } else {
    console.log("ServiceWorker belum didukung browser ini.")
<<<<<<< HEAD
  }

  document.addEventListener("DOMContentLoaded", function() {
    getArticles();
    getArticleById();

});
=======
  }
>>>>>>> b4a57cee8a4ebd6d225059c4aa1d349be1309021
