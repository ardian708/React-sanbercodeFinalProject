import React from 'react';
import { Jumbotron, ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// !Menggunakan Hooks (Nilai plus jika ada Custom Hooks).
// !Menerapkan metode Composing, Extracting Component, dan Lifting State Up.
// !Terdapat lists

function ListMap(props) {
    console.log(props)
    const content = props.list.map((list) =>
        <div key={list.id}>
            <p>{list.title}
                <ProgressBar animated now={list.percent} label={`${list.percent}%`} />
            </p>
        </div>
    );
    return (
        <div>{content}</div>
    );
}

function Condition(props) {
    const designList = [
        { id: 1, title: 'Material Design', percent: 80 },
        { id: 2, title: 'iOS', percent: 70 }
    ];
    const programList = [
        { id: 1, title: 'Objective-C', percent: 50 },
        { id: 2, title: 'PHP', percent: 70 },
        { id: 3, title: 'JavaScript', percent: 60 },
        { id: 4, title: 'Swift', percent: 30 }
    ];
    const fwList = [
        { id: 1, title: 'Bootstrap', percent: 80 },
        { id: 2, title: 'React JS', percent: 40 },
        { id: 3, title: 'CodeIgniter', percent: 60 }
    ];

    if (props.text === 'Design') {
        return <ListMap list={designList} />
    } else if (props.text === 'Program') {
        return <ListMap list={programList} />
    } else if (props.text === 'Framework') {
        return <ListMap list={fwList} />
    }
}

function Content(props) {
    return (
        <Jumbotron>
            <h1>{props.title} Percentage</h1>
            <hr />
            <Condition text={props.text} />
        </Jumbotron>
    )
}

export default function ContentDetail() {
    let { contentId } = useParams()
    return (
        <Content title={contentId} text={contentId} />
    )
}