import React from "react";

import * as AiIcons from  "react-icons/ai";
import * as FaIcons from  "react-icons/fa";
import * as IoIcons from  "react-icons/io";

export const Sidebardata=[
    {
         title : 'Home',
         path : '/notieboard',
         icon: <AiIcons.AiFillHome />,
         cName : 'nav-text'

    }, 
    {
        title : 'Notices manegement',
        path : '/notice/add',
        icon: <IoIcons.IoIosNotifications/>,
        cName : 'nav-text'

   }, 
   {
    title : 'Class manegement',
    path : '/teacher/newClassRequests',
    icon: <IoIcons.IoIosPeople/>,
    cName : 'nav-text'

}, 
{
    title : 'Payment manegement',
    path : '/pendingPayments',
    icon: <IoIcons.IoIosCard />,
    cName : 'nav-text'

}, 
{
    title : 'Student manegement',
    path : '/addS',
    icon: <IoIcons.IoIosPeople/>,
    cName : 'nav-text'

}, 

{
    title : 'Noticeboard',
    path : '/notieboard',
    icon: <IoIcons.IoIosNotifications />,
    cName : 'nav-text'

}, 
{
    title : ' Update and delete',
    path : '/AllNotices',
    icon: <IoIcons.IoIosAlarm />,
    cName : 'nav-text'

}, 
{
    title : 'Download PDF',
    path : '/pdf',
    icon: <IoIcons.IoIosAlarm />,
    cName : 'nav-text'

}, 

]

