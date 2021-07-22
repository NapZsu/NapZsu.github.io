let nevek=['Zsuzsa', 'András', 'Ákos', 'Délia', 'Anna']

let title="Beillesztve JavaScripttel"
let text="Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"


$('body').append('<h1>'+(title)+'</h1>')
nevek.forEach(element => {$('body').append('<li>'+(element)+'</li>');
                            if ((element)==='Zsuzsa') {
                                $('li').css('font-weight', 'bold')   
                                }
                            })

$('body').append('<p>'+(text)+'</p>')

