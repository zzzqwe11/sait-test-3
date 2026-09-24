function openActivityBooking(activityId) {

    const activity =
        activities.find(
            item => item.id === activityId
        );


    if (!activity) return;


    const date =
        prompt(
            "Введите дату бронирования (например, 20.09.2026):"
        );

    if (!date) return;


    const time =
        prompt(
            "Введите время начала:"
        );

    if (!time) return;


    const people =
        prompt(
            "Сколько человек?"
        );

    if (!people) return;


    const user =
        JSON.parse(
            localStorage.getItem(
                "aquatoriaCurrentUser"
            )
        );


    if (!user) {

        alert(
            "Для бронирования необходимо войти в аккаунт."
        );

        window.location.href =
            "login.html";

        return;

    }


    const booking = {

        id: Date.now(),

        type: "activity",

        userEmail: user.email,

        boatId: activity.id,

        boatName: activity.name,

        date: date,

        time: time,

        duration: people + " чел.",

        status: "Ожидает подтверждения"

    };


    const bookings =
        JSON.parse(
            localStorage.getItem(
                "aquatoriaBookings"
            )
        ) || [];


    bookings.push(booking);


    localStorage.setItem(
        "aquatoriaBookings",
        JSON.stringify(bookings)
    );


    alert(
        "Бронирование успешно создано!"
    );

}