import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { FiX } from 'react-icons/fi'
import { Container, Error } from '../NewActivyModal/styles'

interface NewActivyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface NewActivyModalData {
    courseUnit: string;
    activy: string;
    date: Date;
}

export function NewActivyModal({ isOpen, onRequestClose }: NewActivyModalProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<NewActivyModalData>();

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Atividade</h2>
                <button
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                >
                    <FiX size={20} />
                </button>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Unidade Curricular" {...register("courseUnit", { required: true })} />
                    {errors.courseUnit && <Error>O preenchimento do campo é obrigatório</Error>}
                    <input type="text" placeholder="Atividade" {...register("activy", { required: true })} />
                    {errors.activy && <Error>O preenchimento do campo é obrigatório</Error>}
                    <input type="date" placeholder="Data da atividade" {...register("date", { required: true })} />
                    {errors.date && <Error>O preenchimento do campo é obrigatório</Error>}
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>

            </Container>
        </Modal>
    )
}