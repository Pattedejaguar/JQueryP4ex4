// // Utilisation de regexp pour tester la validité des champs
//     var nomPrenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
//     var mailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     $('#valid').click(function(){
//     // valid.addEventListener('click', function(){
//       var nom = $('#nom').val();
//       var prenom = $('#prenom').val();
//       var mail = $('#mail').val();
//       var tel = $('#tel').val();
//       console.log(nom);
//       console.log(nomPrenomValid.test(nom));
//       // On vérifie si la valeur du champ respecte la regexp
//       // .test(): vérifie s'il y a une correspondance entre un texte et une regexp, renvoi un booléen
//       if (nomPrenomValid.test(nom) == false) {
//         // Si c'est faux on émet une alerte et on change la couleur des bordures
//           alert ("Nom invalide !");
//           $('#nom').css('border-color', 'red');
//           // document.getElementById('nom').style.borderColor = 'red';
//       } else {
//         // document.getElementById('nom').style.borderColor = '';
//         $('#nom').css('border-color', '');
//       }
//       // Si le prénom n'est pas valide
//       if (nomPrenomValid.test(prenom) == false) {
//           alert ("Prénom invalide !");
//           $('#prenom').css('border-color', 'red');
//           // document.getElementById('prenom').style.borderColor = 'red';
//       } else {
//         // document.getElementById('nom').style.borderColor = '';
//         $('#prenom').css('border-color', '');
//       }
//       // Si le mail n'est pas valide
//       if (mailValid.test(mail) == false) {
//           alert ("Mail invalide !");
//           $('#mail').css('border-color', 'red');
//           // document.getElementById('mail').style.borderColor = 'red';
//       } else {
//         // document.getElementById('nom').style.borderColor = '';
//         $('#mail').css('border-color', '');
//       }
//       // Si le numéro n'est pas un nombre ou qu'il ne fait pas 10 caractères
//       if ((isNaN(tel) || (tel.length != 10))) {
//         alert ("Téléphone invalide !");
//         $('#tel').css('border-color', 'red');
//         // document.getElementById('tel').style.borderColor = 'red';
//       } else {
//         // document.getElementById('nom').style.borderColor = '';
//         $('#tel').css('border-color', 'red');
//       }
//     });



    $(function(){
      // lorsque le formulaire est soumis
      $('form').submit(function(event){
        // on récupères les champs dans le formulaire, dans une seule variable.
      var inputs = $('input');
      $('small').remove();
      // each permet de parcourir mon tableau
      $.each(inputs, function(){
        let input = this;
        // ici on verifie que nos champs (nos inputs) respectent les contraintes qu'on a définit dans le html
        if(!input.validity.valid){
          var small = $('<small></small>');
          small.addClass('alert alert-danger');
          small.text(input.validationMessage);
          $(input).after(small);
          event.preventDefault();
        };
      },false);
});
    });
  });
  // regex
  $(function(){
    var regexName = /^[A-Za-z]+(([- ]?)[A-Za-z])*$/
    var regexPhone = /^0[67][0-9]{8}/
    var regexMail = /  ^[a-zA-Z][a-zA-Z0-9]+([_\.-]?[a-zA-Z0-9]+)@[a-z][a-zA-Z0-9_\.-]+\.[a-z]{2,5}/
    $('form').submit(function(event){
    var name  = $('#Name').val();
    var firstName  = $('#firstName').val();
    var number  = $('#number').val();
    var email  = $('#Email').val();
    if(name == ''){
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Ce champ est obligatoire');
      $('#Name').after(small);
    }
    else if(!regexName.test(name)){
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Saisie incorrecte');
      $('#Name').after(small);
      event.preventDefault();
    }
  });
});
