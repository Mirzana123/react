import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Districts() {
    let Districts = [
        {
            id: 1,
            title: "Trivandrum",
            desc: "Capital City",
            image:"https://trisoj.com/travel-guide/wp-content/uploads/2022/10/Places-to-visit-in-Trivandrum.png",
        },
        {
            id: 2,
            title: "Kollam",
            desc: "Port City",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/17/fb/80/perunthenaruvi-waterfall.jpg?w=700&h=-1&s=1",
        },
        {
            id: 3,
            title: "Pathanamthitta",
            desc: "Pilgrim Center",
            image: "",
        },
        {
            id: 4,
            title: "Alappuzha",
            desc: "Backwater Destination",
            image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/7d/4e.jpg",
        },
        {
            id: 5,
            title: "Kottayam",
            desc: "Lakeside Retreat",
            image: "https://example.com/kottayam.png",
        },
        {
            id: 6,
            title: "Idukki",
            desc: "Hill Station",
            image: "https://example.com/idukki.png",
        },
        {
            id: 7,
            title: "Ernakulam",
            desc: "Commercial Hub",
            image: "https://example.com/ernakulam.png",
        },
        {
            id: 8,
            title: "Thrissur",
            desc: "Cultural Capital",
            image: "https://example.com/thrissur.png",
        },
        {
            id: 9,
            title: "Palakkad",
            desc: "Gateway to Kerala",
            image: "https://example.com/palakkad.png",
        },
        {
            id: 10,
            title: "Malappuram",
            desc: "Land of Teak",
            image: "https://example.com/malappuram.png",
        },
        {
            id: 11,
            title: "Kozhikode",
            desc: "City of Spices",
            image: "https://example.com/kozhikode.png",
        },
        {
            id: 12,
            title: "Wayanad",
            desc: "Green Paradise",
            image: "https://example.com/wayanad.png",
        },
        {
            id: 13,
            title: "Kannur",
            desc: "Land of Looms and Lores",
            image: "https://example.com/kannur.png",
        },
        {
            id: 14,
            title: "Kasaragod",
            desc: "Northernmost District",
            image: "https://www.keralatourism.org/images/destination/mobile/aquatourism_in_kasaragod20131107114603_306_1.jpg",
        },
    ];

    return (
        <div>
            <Container>
                <Row>
                    {
                        Districts.map((e) => (
                            <Col key={e.id}>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Img variant="top" src={e.image} />
                                    <Card.Body>
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text>
                                            {e.desc}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
}
