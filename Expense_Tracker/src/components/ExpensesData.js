import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './ExpensesData.css'

function ExpensesData(props) {

    return (
    <Card className="expenses">
        <ExpenseItem 
            title={props.data[0].title}
            amount={props.data[0].amount} 
            date={props.data[0].date}
        ></ExpenseItem>
        <ExpenseItem 
            title={props.data[1].title}
            amount={props.data[1].amount} 
            date={props.data[1].date}
        ></ExpenseItem>
        <ExpenseItem 
            title={props.data[2].title}
            amount={props.data[2].amount} 
            date={props.data[2].date}
        ></ExpenseItem>
        <ExpenseItem 
            title={props.data[3].title}
            amount={props.data[3].amount} 
            date={props.data[3].date}
        ></ExpenseItem>
    </Card>
    );
}

export default ExpensesData;