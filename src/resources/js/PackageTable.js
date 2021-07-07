import React, { Component } from 'react'
import PackageDetail from './PackageDetail';
import TableHeading from './TableHeading';
import TableRow from './TableRow';

export default class PackageTable extends Component {
    componentDidMount(){
        var toggleDetails = document.getElementsByClassName('toggle');
        var toggleViewBtn = document.getElementsByClassName('view-btn');
        var toggleBookBtn = document.getElementsByClassName('less-btn');

        for (let i = 0; i < toggleDetails.length; i++) {
            toggleViewBtn[i].addEventListener('click', () => {
                toggleDetails[i].style.display = 'table-cell';
                toggleViewBtn[i].style.display = 'none';
                toggleBookBtn[i].style.display = 'block';
            })
            toggleBookBtn[i].addEventListener('click', () => {
                toggleDetails[i].style.display = 'none';
                toggleViewBtn[i].style.display = 'block';
                toggleBookBtn[i].style.display = 'none';
            })
        }
    }
    render() {
        return (
            <section>
                <h3>Popular Goa Packages</h3>
                            <table className='package-table'>
                                <TableHeading/>
                                
                            </table>
            </section>
        )
    }
}
