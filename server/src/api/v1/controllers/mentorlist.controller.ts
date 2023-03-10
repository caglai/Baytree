import { Request, Response, NextFunction } from 'express';
import UserInfo from '../models/userinfo.model';

    const mentorListController = async (req:Request, res:Response, next:NextFunction) => {
       
        UserInfo.find({})
            .exec()
            .then((users) => {
                res.status(200).send({
                    result: users
                });
            })
            .catch(err => {
                return res.status(404).send({
                    error: err
                });
            });
    }
    export default mentorListController;