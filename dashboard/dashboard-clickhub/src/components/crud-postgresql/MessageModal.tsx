import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@nextui-org/react";

interface MessageModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

export default function MessageModal({ isOpen, onClose, message }: MessageModalProps) {
    return (
        <Modal isOpen={isOpen} size="sm" onClose={onClose}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">Mensagem</ModalHeader>
                <ModalBody>
                    <p>{message}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                        Fechar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
