import React from 'react'
import { connect } from 'react-redux'; 

const TodoList = (props) => {  
    let {inputValue, inputChange, clickBtn, list} = props
    return ( 
        <div>
            <div>
                <input type="text" value={inputValue} 
                    onChange={inputChange}
                />
                <button onClick={clickBtn}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={item + index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        clickBtn() {
            let action = {
                type: 'add_item'
            }
            dispatch(action)
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);