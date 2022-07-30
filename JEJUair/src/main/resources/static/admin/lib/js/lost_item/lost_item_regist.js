$(function(){
    let category = document.getElementById("category").getAttribute("value");
    $(document).on('click', '#sendit', function(){
        if(!$('#lostItem').val()){
            alert('분실물을 입력하세요');
            $('#lostItem').focus();
            return false;
        }

        if(!$('#lostAcqAirName').val()) {
            alert('습득편명을 입력하세요');
            $('#lostAcqAirName').focus();
            return false;
        }

        if(!$('#lostAcqDate').val()){
            alert('습득날짜를 입력하세요');
            $('#lostAcqDate').focus();
            return false;
        }

        if(!$('#lostDisDate').val()){
            alert('폐기날짜를 입력하세요');
            $('#lostDisDate').focus();
            return false;
        }

        if(!$('#lostExplain').val()){
            alert('상세설명을 입력하세요');
            $('#lostExplain').focus();
            return false;
        }

        if(!$('#lostSeatNum').val()){
            alert('좌석번호를 입력하세요');
            $('#lostSeatNum').focus();
            return false;
        }



        let storage = document.getElementById("lostStoragePlace");
        let lostStoragePlace = storage.options[storage.selectedIndex].value;

        let color = document.getElementById("lostColor");
        let lostColor = color.options[color.selectedIndex].value;

        let status = document.getElementById("lostStatus");
        let lostStatus = status.options[status.selectedIndex].value;


        /*
                    {
                        "transaction_time":"2022-07-12",
                        "resultCode":"ok",
                        "description":"ok",
                        "data":{
                            "userid":"ryu",
                            "userpw":"1111",
                            "name":"류"
                        }
                    }
         */

        let jsonData = {
            transaction_time: new Date(),
            resultCode:"ok",
            description:"ok",
            data:{
                admAdminId: $('#admAdminId').val(),
                lostItem: $('#lostItem').val(),
                lostAcqAirName: $('#lostAcqAirName').val(),
                lostAcqDate: $('#lostAcqDate').val(),
                lostStoragePlace: lostStoragePlace,
                lostDisDate: $('#lostDisDate').val(),
                lostColor: lostColor,
                lostExplain: $('#lostExplain').val(),
                lostSeatNum: $('#lostSeatNum').val(),
                lostStatus: lostStatus,
                lostImg: $('#lostImg').val()

            }
        }

        $.post({
            url: '/api/'+category,
            data: JSON.stringify(jsonData),
            dataType: 'json',
            contentType: 'application/json',
            success: function(){
                alert('등록성공!');
                location.href='/admin/'+category+'/list';
            },
            error: function(){
                alert('등록실패!');
                location.reload();
            }
        });
    });
});
