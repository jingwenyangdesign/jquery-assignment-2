$.ajax({
    url:"https://quarkbackend.com/getfile/karbassi/user-profiles",
    type:"GET",
    success:function(response){
        for(var i = 0; i < response.length;i++){
            var user = response[i];
            updateUserInfo(i,user);
        }
    }
})

function updateUserInfo(index,user){
    var $user = $('.user-profile').eq(index);
    $user.css("background-color", user.favoriteColor);
    $user
        .find(".thumbnail")
        .find("img")
            .text(user.picture)
            .attr("src", user.picture);

    $user.find('h3').text(user.name.first + " " + user.name.last);
    $user
        .find('.company')
        .find('.name')
            .text(user.company.name);

    $user.find('.street').text(user.company.address.street);
    $user.find('.city').text(user.company.address.city);
    $user.find('.state').text(user.company.address.state);
    $user.find('.zip').text(user.company.address.zip);

    $user
        .find('.company') 
        .find('a')
            .text(user.company.email)
            .attr('href',"mailto:" + user.company.email);
}