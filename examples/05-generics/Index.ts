class Warrior {
    public name: string = ''
}
class Mage {
    public name: string = ''
}
interface Hero<T> {
    create(item: T): Boolean 
}   
abstract class BaseHero <T> implements Hero <T> {
    public database: T[] = []
    create(item: T) {
        console.log('creating..', item)
        this.database.push(item)
        return true
    }
}
class WarriorSvc extends BaseHero<Warrior> {
    
}
class MageSvc extends BaseHero<Mage> {
    list(): Mage[] {
        return this.database
    }
}
const warrior = new WarriorSvc()
warrior.create(<Warrior> {
    name: 'Samurai Jack'
})
const mage = new MageSvc()
mage.create(<Mage> {
        name: 'Zantex'
})

console.log('Mage', 'final result: ', mage.list())