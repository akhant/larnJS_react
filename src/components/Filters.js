import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import DayPicker, { DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from 'react-redux';
import {changeSelection} from '../AC';
import {changeDateRange} from '../AC';
import {deleteArticle} from "../AC"
import {mapToArr} from '../helpers';

class Filters extends Component {

    handleSelection = selected => {
        this.props.changeSelection(selected.map(option => option.value))
    };

    handleDayClick = day => {
        const {changeDateRange, range} = this.props;
        changeDateRange(DateUtils.addDayToRange(day, range))
    };

    render() {
        const {articles} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        const {from, to} = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

        return (
            <div className="Filters">
                <Select className="Select"
                    options={options}
                    onChange={this.handleSelection}
                    value={this.props.selected}
                    multi={true}
                />
                <DayPicker
                    className="DateRangePicker"
                    ref="daypicker"
                    selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
                    onDayClick={this.handleDayClick}
                />
                <div className="selectedRange">{selectedRange}</div>
            </div>
        );
    }
}

Filters.propTypes = {
    articles: PropTypes.array.isRequired,
    changeDateRange: PropTypes.func.isRequired,
    range: PropTypes.object.isRequired


};
Filters.defaultProps = {};

export default connect(state => ({
    articles: mapToArr(state.articles.entities),
    selected: state.filters.selected,
    range: state.filters.dateRange
}), {changeSelection, changeDateRange, deleteArticle})(Filters);
