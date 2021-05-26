import { Col, Checkbox, Card } from "antd";

export type MovieView = {
    title: string;
    id: number;
    overview: string;
    poster_path: string;

};
export default function Display(props: MovieView) {
    return (
        <Col span={6} style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }} >
            <Card
                hoverable
                style={{ flex: 1, minWidth: '330px', display: "flex", alignItems: "center", flexDirection: 'column', textAlign: 'center' }}>
                <img src={props.poster_path} width={150} alt="image poster" style={{ paddingBottom: '20px', }} />
                <div style={{ maxWidth: '190px' }}><Checkbox value={props.id}>{props.title}</Checkbox></div>
            </Card>
        </Col>
    );

}
