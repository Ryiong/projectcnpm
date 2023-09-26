//Chọn loại tài khoản
const qtv = document.querySelector("#submit-qtv");
        const sv = document.querySelector("#submit-sv");
        const gv = document.querySelector("#submit-gv");
        let form = document.forms['form_user'];
        let menu = form.user;
        let option = form.user.options;

        menu.onchange = function(){
            let optionValue = this.value;
            if (optionValue == "SV") {
                sv.classList.remove('unavailable')
                qtv.classList.remove('inline-block')
                sv.classList.add('inline-block')
                qtv.classList.add('unavailable')
                gv.classList.remove('inline-block')
                gv.classList.add('unavailable')
            }
            if (optionValue == "GV") {
                gv.classList.remove('unavailable')
                qtv.classList.remove('inline-block')
                gv.classList.add('inline-block')
                qtv.classList.add('unavailable')
                sv.classList.remove('inline-block')
                sv.classList.add('unavailable')
            }
            if (optionValue == "QTV") {
                qtvv.classList.remove('unavailable')
                gv.classList.remove('inline-block')
                qtvv.classList.add('inline-block')
                gv.classList.add('unavailable')
                sv.classList.remove('inline-block')
                sv.classList.add('unavailable')
            }
        }
// Hiển thị danh sách chọn lớp
const name_subj = document.querySelector("#name_subj")
const name_class = document.querySelector("#name_class")
let form1 = document.forms['form_subj'];
let menu1 = form1.subj;
let option1 = form1.class.options;
menu1.onchange = function(){
    let optionValue = this.value;
    if (optionValue == "CNPM") {
        name_class.classList.remove('unavailable')
        name_class.classList.add('inline-block')
    }
    if (optionValue == "CHP") {
        name_class.classList.remove('inline-block')
        name_class.classList.add('unavailable')
        l21cn3_point.classList.remove('inline-table')
        l21cn4_point.classList.remove('inline-table')
        l21cn3_point.classList.add('unavailable')
        l21cn4_point.classList.add('unavailable')
    }
}

//Hiển thị nhập điểm theo các lớp
const l21cn3_point = document.querySelector("#l21cn3_point");
const l21cn4_point = document.querySelector("#l21cn4_point");
let form2 = document.forms['form_subj'];
let menu2 = form2.class;
let option2 = form2.class.options;
menu2.onchange = function(){
    let optionValue = this.value;
    if (optionValue == "l21cn3") {
        l21cn3_point.classList.remove('unavailable')
        l21cn4_point.classList.remove('inline-table')
        l21cn3_point.classList.add('inline-table')
        l21cn4_point.classList.add('unavailable')
    }
    if (optionValue == "l21cn4") {
        l21cn4_point.classList.remove('unavailable')
        l21cn3_point.classList.remove('inline-table')
        l21cn4_point.classList.add('inline-table')
        l21cn3_point.classList.add('unavailable')
    }
    if (optionValue == "CLHP") {
        l21cn3_point.classList.remove('inline-table')
        l21cn4_point.classList.remove('inline-table')
        l21cn3_point.classList.add('unavailable')
        l21cn4_point.classList.add('unavailable')
    }
}
