import Form from 'react-bootstrap/Form';


function SettingsForm() {
  return (
    <div className="settings-form-card">
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control size="small" type="text" placeholder="Jarvis" />
            </Form.Group>
        </Form>
    </div>
  );
}

export default SettingsForm;