import React, { Component } from 'react';
import { MyContext } from '../../context';
import Layout from '../../components/Layout';
import Groups from './Groups';

export default function AllGroups() {
    return (
        <Layout>
        <section className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-12">
                        <div className="columns is-centered laraContent">
                            <div className="column is-12">
                                <h3 className="title is-3">Todos los grupos</h3>
                                <Groups />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
    )
}

AllGroups.contextType = MyContext;