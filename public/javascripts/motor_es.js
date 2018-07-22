var apiUrl = 'http://localhost:3000/';
$('#imageUploadForm').on("change", function(data){
    console.log(data.target.files[0]);
    var formData = new FormData();
    formData.append('file', data.target.files[0]);
    $.ajax({
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        url: apiUrl+'upload',
        success: function(data) {
            console.log('success', data);
            let $imageList = $('.imagePreViewList');
            let imageHTML = '<div class="outer" ><div class="inner"> <img src="{imageSrc}" class="imagePreView" /></div></div>';
            imageHTML = imageHTML.replace('{imageSrc}', data.Location);
            $imageList.append(imageHTML);
            let $image = $('.imagePreViewList img');

            let index = $image.length;
            let imageDataHTML = '<input type="hidden" name="image-{index}" value="{imageSrc}" />';
            imageDataHTML = imageDataHTML.replace('{index}',index).replace('{imageSrc}',data.Location)
            $imageList.append(imageDataHTML);
            
        }
    });
});

// $("form").submit(function(e){
//     e.preventDefault();
//     console.log(e.target);

//     let formData = new FormData();
//     let jsonData = {

//     };
//     for (let i = 0; i < e.target.length; i++) {
//         console.log(e.target[i].name,' : ',e.target[i].value);
//         jsonData[e.target[i].name.toString()] = e.target[i].value;
//     }

//     $.ajax({
//         type: 'POST',
//         data: jsonData,
//         dataType: 'json',
//         url: apiUrl+'uploadResult',
//         success: function(data) {
//             console.log('success', data);
//         }
//     });
// });