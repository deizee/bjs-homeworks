class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        // добавляет новый звонок в коллекцию существующих
        if (!id) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
        }
        if (this.alarmCollection.some(e => e.id === id)) {
            console.error('Будильник с таким id уже существует');
            return;
        }
        this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        // удаляет определённый звонок
        const index = this.alarmCollection.findIndex(e => e.id == id);
        if (index >= 0) {
            this.alarmCollection.splice(index, 1);
            return true;
        } else {
            return false;
        }        
    }

    getCurrentFormattedTime() {
        // возвращает текущее время в строковом формате HH:MM
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        // запускает все звонки
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(timer => this.checkClock(timer));
            }, 50000);
        }
    }

    checkClock(timer) {
        const nowTime = this.getCurrentFormattedTime();
        if (timer.time == nowTime) {
            timer.callback();
        }
    }

    stop() {
        // останавливает выполнение всех звонков
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        console.log('Все будильники остановлены');
    }

    printAlarms() {
        // печатает все звонки
        this.alarmCollection.forEach(timer => {
            console.log(`Будильник №${timer.id} заведён на ${timer.time}`);
        })
    }

    clearAlarms() {
        // удаляет все звонки
        stop();
        this.alarmCollection = [];
        console.log('Все будильники удалены');
    }
}

function testCase() {
    const a = new AlarmClock;
    a.addClock('16:23', () => console.log('Пора вставать!'), 1);
    a.addClock('16:24', () => console.log('Вставай!'), 2);
    a.addClock('16:25', () => console.log('Хватит спать!'), 3);
    a.addClock('16:26', () => console.log('Подъёёёёёёём!!!!!!!'), 4);
    //a.addClock('16:19', () => console.log('Подъёёёёёёём!!!!!!!'), 4);
    //a.addClock('16:20', () => console.log('Подъёёёёёёём!!!!!!!'));
    a.start();
    a.printAlarms();
    a.removeClock(2);
    a.printAlarms();
    //setTimeout(a.clearAlarms(), 120000);
    //setTimeout(a.stop, 60000);
}

testCase();