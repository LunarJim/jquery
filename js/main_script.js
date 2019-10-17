

$(document).ready(function() {


    console.log('init_OK');

    
    $('.button').click(function(e) {

         var article = $(this.closest(".article"));

         article.hide();
        
    });


    $('.get-cocktails').click(function() {


        $.ajax({
            url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
            type: 'GET',
            dataType: 'JSON',
            success: function(data) {
                
                console.log('good');

                $list = $('.list ul');

                for (var index in data.drinks) {

                var output = '';
                output += '<li> ' + data.drinks[index].strDrink + data.drinks[index].strIngredient1 + '</li>';

                $list.append(output);

                };
            
                // var cocktailName = data.drinks[1].strDrink;

                // $('.cocktails-name').after('<p> '+ cocktailName + ' </p>');
            
            }

        });

        

        
    });


});