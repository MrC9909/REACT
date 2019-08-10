import React from 'react';
import {Form,Icon,Input,Button,Checkbox,message} from 'antd';
import axios from 'axios';

/*import css*/
import './login.less';

/*import img*/
import logo from '../../statics/images/logo.png';
class Login extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>
                <div className='login-header'>
                    <img src={logo}/>
                    <h1>后台管理系统</h1>
                </div>
                <div className='login-content'>
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username',{
                                initialValue: '',
                                rules:[
                                    /*用户名/密码的的合法性要求
                                 1). 必须输入
                                 2). 必须大于等于4位
                                 3). 必须小于等于12位
                                 4). 必须是英文、数字或下划线组成
                                 */
                                    {required:true,message:'用户名必须输入'},
                                    {max:12,message:'必须小于等于12位'},
                                    {min:4,message:'必须大于等于4位'},
                                    {pattern:/^[a-zA-Z0-9_]+$/,message:'必须小于等于12位'}
                                ],
                            })(<Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />)
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password',{
                                    initialValue:'',
                                    rules: [{validator:this.validator}],
                                })(<Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />)
                            }
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, {username,password}) => {
            if (err)return message.error('收集数据失败');
            // let result = await axios({
            //     method:'post',
            //     url:'/login',
            //     data:{
            //         username:'admin',
            //         password:'admin'
            //     }
            // });
            // console.log(result);
        });
    };

    validator = (rule, value, callback) =>{
        const length = value && value.length;
        const pwdReg = /^[a-zA-Z0-9_]+$/;
        if (!value){
            callback('密码必须输入');
        }else if(length<4){
            callback('密码必须输入');
        }else if(length>12){
            callback('密码必须小于12');
        }else if(!pwdReg.test(value)){
            callback('必须是数字字母下划线');
        }else {
            callback();
        }
    };

}

export default Form.create({name:'login'})(Login);