import React, { useState, View } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { getOpenPRsInfo } from '../thunks'

const mapStateToProps = (state) => ({
    repoUrl: state.gitHub.repoUrl,
    openPRs: state.gitHub.openPRs,
})

const mapDispatchToProps = (dispatch) => ({
    getOpenPRsInfo: (repoUrl) => dispatch(getOpenPRsInfo(repoUrl)).unwrap(),
})

const Component = ({ getOpenPRsInfo }) => {
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
        <Form>
            <Form.Group controlId="repoUrl">
                <Controller
                    control={control}
                    render={() => (
                        <Form.Control
                            placeholder="Enter GitHub Repository URL"
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
    )
}

export const RepoInfoFetcher = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)
