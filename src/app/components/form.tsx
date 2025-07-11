import { useState } from "react";
import { Button, Form } from "react-bootstrap";
type NewRunFormprops = {
    addNewRuns: (summonerName: string, runTime: number, region: string) => void
}
export default function NewRunForm(props: NewRunFormprops) {
    const [summonerName, setSummonerName] = useState<string>("")
    const [runTime, setrunTime] = useState<number>(0)
    const [region, setRegion] = useState<string>("")
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Summoner Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Summoner Name"
                    onChange={(event) => setSummonerName(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Run Time</Form.Label>
                <Form.Control type="text" placeholder="Enter Run Time" 
                onChange={(event) => setrunTime(parseInt(event.target.value))}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Region</Form.Label>
                <Form.Control type="text" placeholder="Enter Summoner Region"
                onChange={(event) => setRegion(event.target.value)}
 />
            </Form.Group>

            <Button onClick={()=>props.addNewRuns(summonerName, runTime, region)}>Add</Button>

        </Form>
    )
}