import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as HiIcons from "react-icons/hi"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Time',
        path: '/time',
        icon: <IoIcons.IoMdTime />,
        cName: 'nav-text'
    },
    {
        title: 'Money',
        path: '/money',
        icon: <FaIcons.FaMoneyBillAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Photos Node',
        path: '/Photos_Node',
        icon: <HiIcons.HiOutlinePhotograph />,
        cName: 'nav-text'
    },
    {
        title: 'Photo-Gallery Framework',
        path: '/React_Photo_Gallery',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'CRUD SpringBoot',
        path: '/CRUD_Spring_Boot',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]