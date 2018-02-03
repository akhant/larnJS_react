import React, {Component} from 'react';
import ArticleList from './ArticleList';
import { articles } from '../fixtures';
import UserForm from './UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Counter from './Counter';


export default class App extends Component{
state = {
    selection: ''
}
    changeSelection = selection => {
        this.setState({
            selection
        })
    }
    render(){
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />
                <UserForm />
                <Select  options={options} onChange={this.changeSelection} value={this.state.selection} />
                <ArticleList  />

            </div>
        )
    }
}
