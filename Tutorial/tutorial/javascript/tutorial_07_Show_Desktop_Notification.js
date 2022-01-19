/*
    => Notification API
        *) use JavaScript to display desktop notifications to the user
        *) only work in secure contexts (https)
*/



console.log(Notification.permission);
// this 'permission' property will tells us wheter or not the user has granted us permission to display notification
// this have three posible value:
// 1) default => default value means user has not said yes or no
// 2) granted => granted means we are allowed to display notification
// 3) denied => user denied to display notification

function showNotification(){
    if(Notification.permission==="granted"){
        const notification=new Notification("New message from Roman!",{
            // Notification(<Title>,{<Option>})
            // there are many option ot explore
            body:"Hay mate, how are you? You want to catch up soon?",
            icon:"https://www.nicepng.com/png/detail/38-385668_push-notifications-push-notification-icon-png.png",
            image:"https://www.nicepng.com/png/detail/38-385668_push-notifications-push-notification-icon-png.png",
            silent:false,
        });
        // if user click the notification
        notification.onclick=(e)=>{
            window.location.href="https://youtube.com";
        }
    }else if(Notification.permission!=="denied"){
        // asking for permission 
        Notification.requestPermission().then(permission=>{
            if (permission==="granted"){
                showNotification();
            }
            console.log(permission);
        })
    }
}
