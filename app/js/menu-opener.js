'use strict';

const menu = document.querySelector('.menu');
menu.addEventListener('mouseover', hoverNav);
menu.addEventListener('mouseout', close);

function hoverNav(e) {
    const target = e.target;
    console.log(target);
    const targetParent = target.closest('.menu-item');
    const targetParentItem = target.closest('.submenu-item');
    console.log(targetParentItem);
    console.log(!!targetParent);
    if (targetParent) {
        const subm1 = targetParent.getElementsByClassName('submenu')[0];
        close();
        if (subm1)  {
            subm1.style.display = 'block';
        }
        if (targetParentItem) {
            const subm2 = targetParentItem.querySelector('.submenu');
            console.log(subm2);
            if (subm2)  {
                subm2.style.display = 'block';
            }
        }
    }

}

function close() {
    const s = document.getElementsByClassName('submenu');
    for (let i = 0; i < s.length; i++) {
        s[i].style.display = 'none';
    }
}

const navHeader = document.querySelector('#nav');
const btnOpen = document.querySelector('.btn-open');
const btnClosed = document.querySelector('.btn-closed');

btnOpen.addEventListener('click', toggleClass);
btnClosed.addEventListener('click', toggleClass);

function toggleClass() {
    navHeader.classList.toggle('none');
    btnOpen.classList.toggle('none');
}

