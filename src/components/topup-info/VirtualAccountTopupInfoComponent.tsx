import React from 'react';
import {Button} from "antd";
import styles from './VirtualAccountTopupInfoComponent.module.css';
import {showSuccessAlert} from "../common/alert/AlertHelper";

const VirtualAccountTopupInfoComponent = () => {
	const handleOnCopyItem = () => {
		showSuccessAlert('Sukses salin nomor akun virtual');
	}

	return (
		<div>
			<div className={styles.header}>
				<div className={styles.accountInfo}>
					<span className={styles.infoHeaderText}>Nomor Akun Virtual</span>
					<span className={styles.accountNumberText}>1293602017345696</span>
				</div>
				<Button
					type={'primary'}
					size={'large'}
					onClick={handleOnCopyItem}
				>
					<div className={styles.copyButton}>
						Salin
					</div>
				</Button>
			</div>
			<div>
				<ol className={styles.instructionList}>
					<li className={styles.instructionListItem}>
						Login ke situs <strong>www.klikbca.com</strong>
					</li>
					<li className={styles.instructionListItem}>
						Masuk ke menu <strong>Fund transfer terlalu pilih Transfer to BCA Virtual Account</strong>
					</li>
					<li className={styles.instructionListItem}>
						Masukkan nomor virtual account : <br/><strong>1293602017345696</strong>
					</li>
					<li className={styles.instructionListItem}>
						Masukkan nominal top up yang diingikan
					</li>
					<li className={styles.instructionListItem}>
						Ikutin Instruksi selanjutnya
					</li>
				</ol>
			</div>
			<div className={styles.additionalInfo}>
				Mohon perhatian. Minimum jumlah setor dana per transfer adalah Rp 10.000 dan
				maksimum jumlah setor dana per transfer adalah Rp 300.000.000. Tergantung limit transfer
				antar Bank dari Rekening Pendana masing-masing
			</div>
		</div>
	);
}

export default VirtualAccountTopupInfoComponent;
