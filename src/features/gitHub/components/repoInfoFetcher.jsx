import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { getOpenPRsInfo } from '../thunks'

const mapStateToProps = (state) => ({
    repoUrl: state.gitHub.repoUrl,
    openPRs: state.gitHub.openPRs,
})

const mapDispatchToProps = (dispatch) => ({
    getOpenPRsInfo: (repoUrl) => dispatch(getOpenPRsInfo(repoUrl)).unwrap(),
})

const Component = ({ getOpenPRsInfo, openPRs }) => {
    const {
        control,
        getValues,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm()
    const onChangeField = (name) => (value) => {
        setValue(name, value)
    }
    const onSubmit = (data) => {
        getOpenPRsInfo(data.url).catch((e) => console.error(e))
    }

    return (
        <div className="w-100 d-flex flex-column align-items-center">
            <Form className="d-flex flex-column align-items-center w-25">
                <Form.Group controlId="repoUrl" className="w-100">
                    <Controller
                        control={control}
                        render={() => (
                            <Form.Control
                                placeholder="Enter GitHub Repository URL"
                                className="w-100"
                                onChange={({ target: { value } }) =>
                                    onChangeField('url')(value)
                                }
                            />
                        )}
                        rules={{ required: true }}
                        name="url"
                    />
                    <p>{errors.url ? 'This field is required' : ' '}</p>
                </Form.Group>
                <Button
                    className="mt-2"
                    variant="primary"
                    type="button"
                    onClick={handleSubmit(onSubmit)}
                >
                    Go!
                </Button>
            </Form>
            {openPRs.length > 0 && (
                <Table striped bordered hover className="w-50 mt-3">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Commits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {openPRs.map((pr) => (
                            <tr>
                                <td>
                                    <a href={pr.url}>{pr.title}</a>
                                </td>
                                <td>{pr.numberOfCommits}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export const RepoInfoFetcher = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)
