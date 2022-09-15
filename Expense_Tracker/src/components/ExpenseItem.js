import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {
    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>       {/*here we're calling the function ExpenseDate has HTML code so we have to asign a value to use de function*/}
        <div className="expense-item__description">
            <h2>{props.title}</h2>         {/*the same name of the attribute has to be one of the keys en the abject arrays*/}
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </Card>
    );
}

export default ExpenseItem;